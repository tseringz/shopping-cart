
import Cart from '../.././components/common/cart/Cart';
import TopNavbar from '../.././components/common/navbar/TopNavbar';

function CheckOut({items}) {
    return (
        <>
         <section>
            <ul>
            <li><TopNavbar /></li>
            <li><Cart items={items}/></li>
            </ul>
        </section>
        <h1>Check Out</h1>
        </>
    )
}

export default CheckOut;