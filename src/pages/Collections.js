import '../GlobalStyle.css';
import TopNavbar from '../components/TopNavbar';
import CollectionItems   from '../components/CollectionItems';
import Footer from '../components/Footer';

function Collections() {
    return (
        <div>
            <div className="container">
                <section>
                    <TopNavbar/>
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