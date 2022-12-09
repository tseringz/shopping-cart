import React from  'react';
import '../GlobalStyle.css';
import { Link } from 'react-router-dom';
import CollectionCard   from '../components/CollectionCard';
import { CollectionItemsData } from '../data/CollectionItemsData';


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

