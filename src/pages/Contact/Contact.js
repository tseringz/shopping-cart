import '../../GlobalStyle.css';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import Footer from '../../components/Footer';

function Contact({items}) {
    return (
        <div className="container">
            <TopNavbar items={items}/>
            <Footer/>
        </div>
    );
}


export default Contact;