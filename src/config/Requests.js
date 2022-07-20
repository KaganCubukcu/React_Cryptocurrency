import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "./api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export function numberWithComas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const symbol = "₺";
const Requests = () => {
  const [trending, setTrending] = useState([]);
  const currency = "TRY";
  const fetchCrypto = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);
  };

  useEffect(() => {
    fetchCrypto();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Card
        sx={{
          maxWidth: 250,
          maxHeight: 300,
          backgroundColor: "#131722", // "#121315"
          mt: 5,
          color: "white",
          px: { xs: 1, md: 4, xl: 9 },
        }}
      >
        <CardMedia
          component="img"
          src={coin?.image}
          alt={coin.name}
          sx={{
            width: 50,
            height: 50,
            display: "flex",
            mx: "auto",
          }}
        />
        <CardContent
          sx={{
            display: "inline-grid",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="p" component="div">
            {coin.name}
          </Typography>
          <Typography component="span">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
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
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </Typography>
            <Typography>
              {numberWithComas(coin?.current_price.toFixed(2))}
              {symbol}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Requests;
