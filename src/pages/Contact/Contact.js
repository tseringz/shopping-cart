import '../../GlobalStyle.css';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import Footer from '../../components/Footer';

function Contact({items}) {
    return (
        <div className="container">
            <TopNavbar items={items}/>
            <div className="contact">
                <h3>Dharamshala Cantt, <br/>
                    McleadGanj,Distt Kangra <br/>
                    Himachal Predesh, H.P<br/>
                    Pincode: 720156</h3>
            </div>
            <Footer/>
        </div>
    );
}


export default Contact;