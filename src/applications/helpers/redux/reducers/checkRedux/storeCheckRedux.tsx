import {
  IS_CHECK_SAGA_NO_PAYLOAD,
  IS_CHECK_SAGA_HAS_PAYLOAD,
} from "../../types/checkRedux/checkRedux";

import { StoreCheckReduxInterface } from "../../interface/interfaceReducers";

const initialState = {
  data: 0,
};

export default (state = initialState, { type, payload }: StoreCheckReduxInterface) => {
  switch (type) {
    case IS_CHECK_SAGA_NO_PAYLOAD:
      return { ...state, data: state.data + 1 };
    case IS_CHECK_SAGA_HAS_PAYLOAD:
      return { ...state, data: payload };
    default:
      return state;
  }
};
