import { takeEvery, all } from "redux-saga/effects";
import {
  IS_CHECK_SAGA_NO_PAYLOAD_REQ,
  IS_CHECK_SAGA_HAS_PAYLOAD_REQ,
} from "../types/checkRedux/checkRedux";

import { CheckSagaNoPayload } from "./checkRedux/actionCheckRedux";
import { CheckSagaHasPayload } from "./checkRedux/actionCheckRedux";

export function* watchCheckSagaNoPayload() {
  yield takeEvery(IS_CHECK_SAGA_NO_PAYLOAD_REQ, CheckSagaNoPayload);
}
export function* watchCheckSagaHasPayload() {
  yield takeEvery(IS_CHECK_SAGA_HAS_PAYLOAD_REQ, CheckSagaHasPayload);
}

export default function* rootSaga() {
  yield all([
    watchCheckSagaNoPayload(), 
    watchCheckSagaHasPayload()
  ]);
}
