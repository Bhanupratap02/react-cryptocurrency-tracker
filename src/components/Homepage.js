import React, { useEffect } from 'react'
import millify from 'millify'
import {Col, Row, Statistic, Typography} from "antd"
import { Link } from  "react-router-dom"
import { useGetCryptosQuery  } from "../Services/cryptoApi"
import Loader from "./Loader";
import { CryptoCurrencies, News } from "../components";
const {Title} = Typography
const Homepage = () => {
   const {data,isFetching}= useGetCryptosQuery(10);
   let globalStats;
   useEffect(() => {
     if(isFetching && data){
       localStorage.setItem("data", JSON.stringify(data))
     }
   }, [data,isFetching])
   
  if (isFetching && data) {
    globalStats = data?.data?.stats;
  }else{
    let res = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    globalStats = res?.data?.stats;
  }
   if (isFetching) <Loader/>
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/cryptoCurrencies">Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={2} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage