import React from 'react';

export default class FloatCartHeader extends React.Component{
    render(){

        const [ ...AllCartProducts ] = this.props.AllCartProducts;
        let GetAllQuantityArray =null;

        GetAllQuantityArray = AllCartProducts.map( (getQuantity)=>{
            if(getQuantity.quantity >0){
                return getQuantity.quantity;
            }else{
                return 0;
            }

        });

        let TotalQuantity= null;
        for(let i=0; i<GetAllQuantityArray.length; i++){
            TotalQuantity = TotalQuantity + GetAllQuantityArray[i];
        }


        
        return(
            <>
                <div className="float-cart__header">
                    <span className="bag">
                    <span className="bag__quantity">{TotalQuantity}</span>
                    </span>
                    <span className="header-title">Cart</span>
                </div>
            </>
        )
    }
}