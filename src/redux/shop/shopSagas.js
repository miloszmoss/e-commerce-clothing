import { takeLatest, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
  converCollectionsSnapshotToMap,
} from '../../firebase/firebaseUtils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';

import {
  UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './shopTypes';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }

  // collectionRef
  //   .geT()
  //   .then(snapshot => {
  //     const collectionsMap = converCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionSuccess(collectionsMap));
  //   })
  //   .catch(err => dispatch(fetchCollectionSuccess(err.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
