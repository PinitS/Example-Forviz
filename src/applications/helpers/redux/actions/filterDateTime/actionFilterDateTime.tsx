import { put } from "redux-saga/effects";
import {
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD,
  CHANGE_DATE_FILTER_HAS_PAYLOAD,
} from "../../types/filterDateTime/filterDateTime";

export function* ChangeRoomIdFilter({ payload }: any) {
  yield put({ type: CHANGE_ROOMID_FILTER_HAS_PAYLOAD, payload });
}

export function* ChangeDateFilter({ payload }: any) {
  yield put({ type: CHANGE_DATE_FILTER_HAS_PAYLOAD, payload });
}
