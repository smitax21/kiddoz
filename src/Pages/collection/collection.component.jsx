import React from 'react';

import {connect} from 'react-redux';

import CollectionItems from '../../Components/collection-item/collection-item.component';

import { SelectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'> { title } </h2>
        <div className='items'> 
            {items.map(item => (
                <CollectionItems key={item.id} item={item}/>
            ))}
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: SelectCollection(ownProps.match.params.collectionId)(state) 
})

export default connect(mapStateToProps)(CollectionPage);