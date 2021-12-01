import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-danger">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy;{" "}
          <a href="https://marvel.com" style={{ textDecoration: "none", color: "white" }}>
            <strong>marvel.com</strong>
          </a>{" "}
          2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
