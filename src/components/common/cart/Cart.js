import { Link } from 'react-router-dom';

function Cart({items}) {
    
    return(
        <>
        <Link to="/CheckOut">
        <span>CART({items})</span></Link>
        </>
    )
}

export default Cart;