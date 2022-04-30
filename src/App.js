/** @format */

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import {
  Navbar,
  Homepage,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              
              <Route
                path="/cryptoCurrencies"
                element={<CryptoCurrencies />}
              ></Route>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse
            <br />
            All rights reserved
          </Typography.Title>

          <Link to="/">Home</Link>
          <Link to="/cryptoCurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
    </div>
  );
};

export default App;