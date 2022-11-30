import '../GlobalStyle.css';
import TopNavbar from '../components/TopNavbar';
import CollectionItems   from '../components/CollectionItems';
import Footer from '../components/Footer';

function CollectionDetails() {
    return (
        <div>
            <div className="container">
                <section>
                    <TopNavbar/>
                </section>
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