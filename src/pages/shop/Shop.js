import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collectionsOverview/collectionsOverview';

import { fetchCollectionStartAsync } from '../../redux/shop/shopActions';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';

import Collection from '../collection/Collection';

import withSpinner from '../../components/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="show-page">
        <Route
          exact
          path={`${match.patch}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop);
