import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import withSpinner from '../withSpinner/withSpinner';
import CollectionOverview from './collectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionOverview);

export default CollectionsOverviewContainer;
