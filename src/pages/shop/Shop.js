import React, { Component } from 'react';
import { shopData } from './shop-data';

import CollectionPreview from '../../components/preview-collection/PreviewCollection';

class Shop extends Component {
  state = {
    collections: shopData,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="show-page">
        {collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
