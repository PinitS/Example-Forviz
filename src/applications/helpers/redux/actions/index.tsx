import { takeEvery, all } from "redux-saga/effects";
import {
  IS_CHECK_SAGA_NO_PAYLOAD_REQ,
  IS_CHECK_SAGA_HAS_PAYLOAD_REQ,
} from "../types/checkRedux/checkRedux";
import {
  CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ,
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ,
} from "../types/filterDateTime/filterDateTime";

import {
  CheckSagaNoPayload,
  CheckSagaHasPayload,
} from "./checkRedux/actionCheckRedux";

import {
  ChangeRoomIdFilter,
  ChangeDateFilter,
} from "./filterDateTime/actionFilterDateTime";

export function* watchCheckSagaNoPayload() {
  yield takeEvery(IS_CHECK_SAGA_NO_PAYLOAD_REQ, CheckSagaNoPayload);
}
export function* watchCheckSagaHasPayload() {
  yield takeEvery(IS_CHECK_SAGA_HAS_PAYLOAD_REQ, CheckSagaHasPayload);
}

export function* watchChangeRoomIdFilter() {
  yield takeEvery(CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ, ChangeRoomIdFilter);
}
export function* watchChangeDateFilter() {
  yield takeEvery(CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ, ChangeDateFilter);
}

export default function* rootSaga() {
  yield all([
    watchCheckSagaNoPayload(),
    watchCheckSagaHasPayload(),
    watchChangeRoomIdFilter(),
    watchChangeDateFilter(),
  ]);
}
