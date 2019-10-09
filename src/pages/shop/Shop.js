import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collectionsOverview/collectionsOverview';
import Collection from '../collection/Collection';
import {
  firestore,
  converCollectionsSnapshotToMap,
} from '../../firebase/firebaseUtils';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot =>
      converCollectionsSnapshotToMap(snapshot),
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className="show-page">
        <Route exact path={`${match.patch}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}
export default Shop;
