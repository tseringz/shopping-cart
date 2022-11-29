import React from  'react';
import '../GlobalStyle.css';
import newImages from '../assets/blue-couch-goodwood.jpg';
function CollectionCard(props) {
    const collection = props.collection;

    return (
        <div className="Card">
            <div className="card-info" style={{
                width: '200px',
                height: '250px',
                backgroundImage: `url(${collection.src})`, 
                backgroundPosition: 'center', 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'black',}}>
                <h4>{collection.name}</h4>
                <h4>{collection.price}</h4>
            </div>
        </div>
    )
    }

export default CollectionCard;