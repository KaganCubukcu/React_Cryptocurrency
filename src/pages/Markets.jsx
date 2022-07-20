import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { CoinList } from "../config/api";
import { numberWithComas } from "../config/Requests";

const Markets = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const currency = "TRY";
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: "18",
          fontFamily: "Arial",
        }}
      >
        All Cryptos
      </Typography>
      <TextField
        label="Search coin name"
        variant="outlined"
        sx={{
          marginBottom: "20",
          width: "100%",
          input: {
            color: "#fff",
          },
          "& label": { color: "white" },
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress sx={{ backgroundColor: "#FADF63" }} />
        ) : (
          <Table>
            <TableHead sx={{ backgroundColor: "#131722" }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontWeight: "700",
                    }}
                    key={head}
                    align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                backgroundColor: "#131722",
              }}
            >
              {coins.map((coin) => {
                handleSearch();
                const profit = coin.price_change_percentage_24h > 0;

                return (
                  <TableRow
                    onClick={() => navigate.push(`/coins/${coin.id}`)}
                    key={coin.name}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        alignItems: " center",
                        color: "white",
                      }}
                    >
                      <Avatar src={coin?.image} alt={coin.name} />
                      <Container
                        sx={{
                          display: "flex",
                          fontSize: 22,
                        }}
                      >
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            marginRight: 2,
                          }}
                        >
                          {coin.symbol}
                        </Typography>
                        <Typography>{coin.name}</Typography>
                      </Container>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "white",
                      }}
                    >
                      ₺{numberWithComas(coin.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "white",
                      }}
                    >
                      {profit > 0 ? (
                        <ArrowDropUpIcon
                          sx={{
                            color: "green",
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon sx={{ color: "red" }} />
                      )}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "white",
                      }}
                    >
                      ₺
                      {numberWithComas(coin.market_cap.toString().slice(0, -6))}
                      M
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default Markets;
