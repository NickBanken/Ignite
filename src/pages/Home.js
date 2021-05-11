import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Game from "../components/Game";
import { useLocation } from "react-router-dom";

const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            ></Game>
          );
        })}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            ></Game>
          );
        })}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              screenshots={game.short_screenshots}
              key={game.id}
            ></Game>
          );
        })}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;