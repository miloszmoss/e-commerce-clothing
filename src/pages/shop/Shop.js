import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collectionsOverview/collectionsOverview';
import Collection from '../collection/Collection';

const Shop = ({ match }) => (
  <div className="show-page">
    <Route exact path={`${match.patch}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
