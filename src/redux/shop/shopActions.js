import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './shopTypes';

import {
  firestore,
  converCollectionsSnapshotToMap,
} from '../../firebase/firebaseUtils';

export const fetchCollectionsStart = collectionsMap => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .geT()
      .then(snapshot => {
        const collectionsMap = converCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(err => dispatch(fetchCollectionSuccess(err.message)));
  };
};
