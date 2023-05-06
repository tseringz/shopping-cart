import { Link } from 'react-router-dom';

function Cart({items}) {
    
    return(
        <>
        <Link to="/CheckOut">
        <span>Cart({items})</span></Link>
        </>
    )
}

export default Cart;