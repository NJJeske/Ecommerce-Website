import React from 'react';
import './CollectionPage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';

const CollectionPage = ({ collection }) => {
return (
    <div className='collection'>
        <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
