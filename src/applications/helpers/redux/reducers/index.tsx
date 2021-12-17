import { combineReducers } from "redux";
import StoreCheckRedux from "./checkRedux/storeCheckRedux";
import StoreFilter from "./filterDateTime/storeFilter";

export default combineReducers({
  StoreCheckRedux,
  StoreFilter,
});
