import React from  'react';
import '../GlobalStyle.css';
import CollectionCard   from '../components/CollectionCard';
import { CollectionItemsData } from '../data/CollectionItemsData';

function CollectionItems() {

    return (
        <div className="">
            <h1>Collections</h1>
               {CollectionItemsData.map((collection, id) => (
                <div className='collection-wrapper' key={id}>
                    <CollectionCard collection={collection}/>
                </div>
               ))}
        </div>
    )
}

export default CollectionItems;