import React from "react";
import styled from "styled-components";

import butler from "../constants/butlerWhite.png";

const Navbar = () => {
  return (
    <AlfredNavbar>
      <Logo>
        <img src={butler} alt="butler" />
        <h1>Alfred</h1>
      </Logo>
      <Menu>
        <ul>
          <li>
            <a href="#calendar">Calendar</a>
          </li>
          <li>
            <a href="#todos">Todos</a>
          </li>
          <li>
            <a href="#notes">Notes</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
          </li>
          <li>
            <a href="#tickets">Tickets</a>
          </li>
          <li>
            <a href="#daily">Daily</a>
          </li>
        </ul>
      </Menu>
      <Login>
        <LogIcon>
          <p>U</p>
        </LogIcon>
      </Login>
    </AlfredNavbar>
  );
};

const AlfredNavbar = styled.div`
  width: 100%;
  height: 8vh;
  background: black;
  display: flex;
  flex-direction: row;
  background: #0025f1;
`;

const Logo = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex start;
  align-items: center;
  flex: 1;

  img {
    height: 70%;
    padding: 0 2rem;
    font-color: white;
  }
  h1 {
    color: white;
    font-family: "Cookie", cursive;
    font-size: 5rem;
    letter-spacing: 2px;
  }
`;

const Menu = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1.7rem;
        letter-spacing: 1px;
      }
    }
  }
  @media screen and (max-width: 950px) {
  }
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 5rem;
  width: 5rem;
  border: 1px solid gray;
  border-radius: 50%;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: #0025f1;
  background: lightgray;
  cursor: pointer;
`;

export default Navbar;
