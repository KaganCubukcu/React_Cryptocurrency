import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import { Typography } from "@mui/material";
import { numberWithComas } from "../config/Requests";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(coin);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 25,
          borderBottom: "2px solid grey",
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{
            marginBottom: 20,
          }}
        />
        <Typography
          variant="h5"
          style={{
            marginBottom: 20,
          }}
        >
          {coin?.name}
        </Typography>
        <div style={{}}>
          <span
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="span"
              sx={{
                pr: 1,
              }}
            >
              Rank:
            </Typography>
            <Typography
              variant="span"
              sx={{
                pr: 1,
              }}
            >
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="span"
              sx={{
                pr: 1,
              }}
            >
              Current Price:
            </Typography>
            <Typography variant="span">
              ₺{numberWithComas(coin?.market_data.current_price["try"])}
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="span"
              sx={{
                pr: 1,
              }}
            >
              Market Cap:
            </Typography>
            <Typography variant="span">
              ₺
              {numberWithComas(
                coin?.market_data.market_cap["try"].toString().slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
