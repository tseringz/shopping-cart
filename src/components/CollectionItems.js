import React from  'react';
import '../GlobalStyle.css';
import CollectionCard   from '../components/CollectionCard';
import { CollectionItemsData } from '../data/CollectionItemsData';
import { Link } from 'react-router-dom';

function CollectionItems() {

    return (
        <div className="container">
        <h1>COLLECTION</h1>
        <div className="Collection">
               {CollectionItemsData.map((collection, id) => (
                <div className='collection-wrapper' key={id}>
                    <Link to="/CollectionDetails">
                    <CollectionCard collection={collection}/>
                    </Link>
                </div>
               ))}
        </div>
        </div>
    )
}

export default CollectionItems;