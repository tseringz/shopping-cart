import React from  'react';
import '../card/cardStyle.css';
import { Link } from 'react-router-dom';
import CollectionCard   from '../card/CollectionCard';
import { CollectionItemsData } from '/Users/mac/the_odin_project/shopping-cart/src/data/CollectionItemsData';


function CollectionItems() {

    return (
        <div className="container">
            <h1>COLLECTION</h1>
            <div className="Collection">
               { CollectionItemsData.map((collection, id) => (
                <div className='collection-wrapper' key={collection.id} >
                    <Link to={`/Collection/${collection.id}`}>
                    <CollectionCard collection={collection} />
                    </Link>
            </div>
               ))}
        </div>
        </div>
    )
}

export default CollectionItems;

