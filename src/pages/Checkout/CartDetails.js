
function CardDetails({cartItems, total, decrementOfItems, incrementNumberOfItems}) {


   return (     <div className="card">
                <div className="cart-wrapper">
                {cartItems.map((cartItem, index) => {
                    return <div key={index} className="item-wrapper">
                        <div className="item-details">
                        <img src={cartItem.src} alt={cartItem.alt}/> 
                        </div>
                        <div className="input-wrapper">
                        <button type="button"  className="sign" onClick={() => decrementOfItems(cartItem.id)}>-</button><input type="number" name="number" min="1" value={cartItem.quantity} max="100"/><button type="button" className="sign" onClick={() => incrementNumberOfItems(cartItem.id)}>+</button></div>
                        <h4>{cartItem.name}</h4>
                        <h4>₹{cartItem.price}</h4>
                    </div>
                })}   
            </div>
            <h3 className="total">Total: {total}</h3>  
            </div>
   )

}

export default CardDetails;