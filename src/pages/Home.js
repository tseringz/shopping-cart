import '../App.css';
import Navbar from '../components/Navbar';

function Home() {

    return (
        <div>
            <div className="container">
                <div className='brand'>
                    GOODWOOD </div>
                <section>
                    <Navbar/>
                </section>
                <section>
                <p>
                Bannach is a Berlin furniture brand founded by Moritz Banach in 2018. The brand 
                represents an interdisciplinary approach and is located in the area of ​​tension between 
                design, architecture and art. In close cooperation with selected manufacturers in Germany, 
                Bannach produces modern furniture objects that are characterized by their distinctive design 
                and the highest quality.
                </p>
                </section>
            </div>
        </div>
    );
}


export default Home;