import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SingleCoin } from "../config/api";

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

  return <div>CoinPage</div>;
};

export default CoinPage;
