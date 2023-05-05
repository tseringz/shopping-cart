import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CollectionItemsData } from '../data/CollectionItemsData';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';
import '../GlobalStyle.css';
import { useState } from 'react';

function CollectionDetails() {
    const params = useParams();
    const userId = params.id;
    const collectionData = CollectionItemsData.find(collection => collection.id === userId);
    const [items, setItems] = useState(0);

    const addToCart = () => {
        setItems(items + 1);
    }

    return (
        <div>
            <div className="container">
                <section>
                    <TopNavbar items={items} />
                </section>
                <div className="collection-details">
                <Link to="/COLLECTION">
                     <a href="/Collection" className="back-to-collection">BACK TO COLLECTION</a>
                </Link>
                <div className="Flex">
                    <div className="flex-child image">
                    <img className="collection-image" src={collectionData.src} alt={collectionData.alt}/>
                    </div>
                    <div className="flex-child details">
                        <h3>{collectionData.name}</h3>
                        <p>{collectionData.description}</p>
                        <h3>{collectionData.price}</h3>
                        <button className="add-to-cart"  onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
                </div>
                <section>     
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}


export default CollectionDetails;