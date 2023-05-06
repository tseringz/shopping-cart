import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CollectionItemsData } from '../data/CollectionItemsData';
import TopNavbar from '../components/common/navbar/TopNavbar';
import Footer from '../components/Footer';
import '../GlobalStyle.css';
import Cart from '/Users/mac/the_odin_project/shopping-cart/src/components/common/cart/Cart';

function CollectionDetails({items, addToCart}) {
    const params = useParams();
    const userId = params.id;
    const collectionData = CollectionItemsData.find(collection => collection.id === userId);

    return (
        <div>
            <div className="container">
                <section>
                    <ul>
                        <li><TopNavbar /></li>
                        <li><Cart items={items}/></li>
                    </ul>
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