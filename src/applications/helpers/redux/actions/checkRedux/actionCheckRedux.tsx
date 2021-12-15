import { put } from "redux-saga/effects";
import {
  IS_CHECK_SAGA_NO_PAYLOAD,
  IS_CHECK_SAGA_HAS_PAYLOAD,
} from "../../types/checkRedux/checkRedux";
import { CheckSagaHasPayloadInterface } from "../../interface/interfaceActions";


export function* CheckSagaNoPayload() {
  yield put({ type: IS_CHECK_SAGA_NO_PAYLOAD });
}

export function* CheckSagaHasPayload({
  payload,
}: CheckSagaHasPayloadInterface) {
  yield put({ type: IS_CHECK_SAGA_HAS_PAYLOAD, payload: payload + 20 });
}
