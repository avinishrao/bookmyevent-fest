import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="fs-1">
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div class='m-3'><Card /><Card /></div>
      <div><Footer /></div>
      <div>This is the div of the Home page</div>
    </div>
  );
}
