import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shopActions';

import CollectionsOverviewContainer from '../../components/collectionsOverview/CollectionOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="show-page">
        <Route
          exact
          path={`${match.patch}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Shop);
