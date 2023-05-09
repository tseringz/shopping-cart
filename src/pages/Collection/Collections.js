import '../../GlobalStyle.css';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import CollectionItems   from '../.././components/common/card/CollectionItems';
import Footer from '../../components/Footer';

function Collections({items}) {

    return (
            <div className="container">
                <header>
                <TopNavbar items={items}/>
                </header>
                <section>
                    <CollectionItems />
                </section>
                <section className="text-info">
                <h2>Bold design, straight forwardness and a demanding quality concept.</h2>
                </section>
                <Footer/>
            </div>
    );
}


export default Collections;