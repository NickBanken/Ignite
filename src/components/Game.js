//Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

import missingImage from "../img/missing-image.png";

const Game = ({ name, released, image, id, screenshots }) => {
  const stringPathId = id.toString();
  //Load details Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, screenshots));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        {image ? (
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={smallImage(image, 640)}
            alt={name}
          />
        ) : (
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={missingImage}
            alt={name}
          />
        )}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  overflow: hidden;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
