import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
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

import axios from "axios";
import { CoinList } from "../config/api";

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
            <TableBody>
              {handleSearch().map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                console.log(row);
                return (
                  <TableRow
                    onClick={() => navigate.push(`/coins/${row.id}`)}
                    key={row.name}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        gap: "15",
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        sx={{
                          marginBottom: 10,
                        }}
                      />
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
