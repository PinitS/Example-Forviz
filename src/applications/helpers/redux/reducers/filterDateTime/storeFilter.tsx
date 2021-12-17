import {
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD,
  CHANGE_DATE_FILTER_HAS_PAYLOAD,
} from "../../types/filterDateTime/filterDateTime";

const initialState = {
  roomId: "A101",
  filter: "today",
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case CHANGE_ROOMID_FILTER_HAS_PAYLOAD:
      return { ...state, roomId: payload };
    case CHANGE_DATE_FILTER_HAS_PAYLOAD:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
