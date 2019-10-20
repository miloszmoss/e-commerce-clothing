import { all, call } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
