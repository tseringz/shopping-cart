import React from  'react';
import '../GlobalStyle.css';

function CollectionCard(props) {
    const collection = props.collection;

    return (
        <>
        <div className="Card" style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            width: '100%',
            height: '600px',
            padding: '40px',
            backgroundImage: `url(${collection.src})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',}}>
            <div className="card-info">
                <h4>{collection.name}</h4>
                <h4>{collection.price}</h4>
            </div>
        </div>
        </>
    )
    }

export default CollectionCard;