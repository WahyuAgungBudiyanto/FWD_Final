import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navigation />

      <div className="container my-5">
        <h1>About this Application</h1>
        <p>Nama Lengkap : Wahyu Agung</p>
        <p>NIM : 105021910044</p>
        <p>Program Studi : Informatika</p>
      </div>

      <Footer />
    </>
  );
};

export default About;
