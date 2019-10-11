import React from "react";
import Logo from "../Icon/Logo";
import BarChartIcon from "../Icon/BarChartIcon";
import ChartIcon from "../Icon/ChartIcon";
import ArrowIcon from "../Icon/ArrowIcon";
import RedditText from "../Icon/RedditText";

const Header = () => {
  return (
    <header className="header">
      <div className="flex-row align-center">
        <Logo />
        <RedditText />
      </div>

      <div className="flex-row align-center header-menu">
        <ChartIcon />
        <span style={{ color: "white"}}>Popular</span>
        <ArrowIcon />
      </div>
      <BarChartIcon />

    </header>
  );
}

export default Header;
