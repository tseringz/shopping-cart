import '/Users/mac/the_odin_project/shopping-cart/src/GlobalStyle.css';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import CollectionItems   from '../.././components/common/card/CollectionItems';
import Footer from '../../components/Footer';
import Cart from '../.././components/common/cart/Cart';

function Collections({items}) {

    return (
        <div>
            <div className="container">
                <section>
                    <ul>
                        <li><TopNavbar/></li>
                        <li><Cart items={items}/></li>
                    </ul>
                </section>
                <section>
                    <CollectionItems />
                </section>
                <section className="text-info">
                <h2>Bold design, straight forwardness and a demanding quality concept.</h2>
                </section>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}


export default Collections;