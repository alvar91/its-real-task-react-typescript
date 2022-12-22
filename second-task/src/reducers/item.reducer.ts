import { v4 as uuid } from "uuid";
import { randomSeconds } from "../utils/randomSeconds";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          timeout: new Date().setSeconds(
            new Date().getSeconds() + randomSeconds()
          ),
        },
      ];
    case "REMOVE":
      return state.filter(({ timeout }) => {
        return new Date() <= timeout;
      });

    default:
      return state;
  }
};
export default reducer;
