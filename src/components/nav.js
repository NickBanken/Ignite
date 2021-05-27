import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/ignite-logo.png";

//Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
      </Logo>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  background-color: #1b1c26;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    display: inline-block;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
    border: 0;
    display: inline-block;
    border: 1px solid transparent;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: auto;
    width: 8rem;
  }
`;

export default Nav;
