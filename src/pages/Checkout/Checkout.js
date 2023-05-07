import TopNavbar from '../.././components/common/navbar/TopNavbar';

function CheckOut({items, cartItems}) {
    return (
        <>
         <section>
            <div className="container">
            <TopNavbar items={items}/>
            <h1>Your Shopping Bag</h1>
            <div className="cart-wrapper">
                {cartItems.map((cartItems) => {
                    return <li key={cartItems.id}>
                        <img src={cartItems.src} alt={cartItems.alt}/>
                        <h3>{cartItems.name}</h3>
                        <h6>{cartItems.price}</h6>
                    </li>
                })}
            </div>          
            </div>
        </section>
        </>
    )
}

export default CheckOut;