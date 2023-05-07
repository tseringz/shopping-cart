import '../.././GlobalStyle.css';
import Navbar from '../../components/common/navbar/Navbar';
import CollectionItems from '../../components/common/card/CollectionItems';
import Footer from '../../components/Footer';
import Cart from '/Users/mac/the_odin_project/shopping-cart/src/components/common/cart/Cart';

function Home({items}) {

    return (
        <div>
            <div className="container">
                <a href="/Home" className="Brand">
                <span>GOODWOOD</span>
                </a>
                <section>
                    <div className="Hero">
                     <ul className="navlinks-wrapper">
                        <li><Navbar /></li>
                        <li><Cart items={items}/></li>
                     </ul>
                    </div>
                </section>
                <section>
                    <div className="text-info">
                        <p>
                            Bannach is a Berlin furniture brand founded by Moritz Banach in 2018. The brand represents 
                            an interdisciplinary approach and is located in the area of ​​tension between design, architecture 
                            and art. In close cooperation with selected manufacturers in Germany, Bannach produces modern 
                            furniture objects that are characterized by their distinctive design and the highest quality.
                        </p>
                    </div>
                </section>
            </div>
            <section>
                <div className="call-to-action">
                </div>
            </section>
            <section>
               <CollectionItems />
            </section>
            <div className="container">
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


export default Home;