import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadDetail = (id, screenshots) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshots,
    },
  });
};