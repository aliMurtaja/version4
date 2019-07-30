import React from 'react';

export default class FloatCartFooter extends React.Component{

    proceedToCheckout = (TotalPrice) =>{
        alert(`SUBTOTAL ${TotalPrice}`)
    }

    render(){

        const [ ...AllCartProducts ] = this.props.AllCartProducts;
        let GetTotalPriceOfEachProductsArray= null;

        GetTotalPriceOfEachProductsArray = AllCartProducts.map( (getQuantity)=>{
            if(getQuantity.quantity >0){
                return getQuantity.quantity*getQuantity.price;
            }else{
                return 0;
            }

        });

        let TotalPrice= null;
        for(let i=0; i<GetTotalPriceOfEachProductsArray.length; i++){
            TotalPrice = TotalPrice + GetTotalPriceOfEachProductsArray[i];
        }
        
        return(
            <>
                <div className="float-cart__footer">
                    <div className="sub">SUBTOTAL</div>
                        <div className="sub-price">
                        <p className="sub-price__val">
                            {/* {`${cartTotal.currencyFormat} ${formatPrice(
                            cartTotal.totalPrice,
                            cartTotal.currencyId
                            )}`} */}
                            {TotalPrice}
                        </p>
                        </div>
                        <div onClick={() => this.proceedToCheckout(TotalPrice)} className="buy-btn">
                        Checkout
                    </div>
                </div>
            </>
        )
    }
}