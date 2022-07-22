import React, { useEffect, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { CoinList } from "../config/api";
import { numberWithComas } from "../config/Requests";

import {
  Avatar,
  Container,
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

const Markets = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(CoinList())
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
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
        placeholder="Search coin name"
        variant="outlined"
        sx={{
          marginBottom: "20",
          width: "100%",
          input: {
            color: "#fff",
          },
          "& label": { color: "white" },
        }}
        onChange={handleChange}
      />
      <TableContainer component={Paper}>
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
            {filteredCoins.map((coin) => {
              return (
                <TableRow key={coin.name}>
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
                    {coin.price_change_percentage_24h > 0 ? (
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
                    ₺{numberWithComas(coin.market_cap.toString().slice(0, -6))}M
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Markets;
