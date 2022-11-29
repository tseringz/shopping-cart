import '../GlobalStyle.css';
import Navbar from '../components/Navbar';
import CollectionItems   from '../components/CollectionItems';

function Collections() {
    return (
        <div>
            <div className="container">
                <div className='brand'>
                    GOODWOOD </div>
                <section>
                    <Navbar/>
                </section>
                <section>
               <CollectionItems />
                </section>
            </div>
        </div>
    );
}


export default Collections;