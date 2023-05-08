import '../../GlobalStyle.css';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import CollectionItems   from '../.././components/common/card/CollectionItems';
import Footer from '../../components/Footer';

function Collections({items}) {

    return (
        <div>
            <div className="container">
                <section>
                    <TopNavbar items={items}/>
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