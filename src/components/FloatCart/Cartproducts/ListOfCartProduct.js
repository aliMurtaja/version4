import React from 'react';
import { Thumb } from '../../Thumb';
// import './../../FloatCart/style.scss';

export default class ListOfCartProduct extends React.Component{
    render(){

        // let GetTotalPriceOfEachProductsArray= null;

        // GetTotalPriceOfEachProductsArray = AllCartProducts.map( (getQuantity)=>{
        //     if(getQuantity.quantity >0){
        //         return getQuantity.quantity*getQuantity.price;
        //     }else{
        //         return 0;
        //     }

        // });


        console.log("inlist")
        // console.log(this.Eachlist.props.quantity)
        // console.log(`${this.props.Eachlist.availableSizes[0]} ali`)
        // console.log(this.props.Eachlist.title);
        console.log(this.props.Eachlist.quantity)
        // let src = require(`./../../../sta    tic/products/${this.props.sku}_2.jpg`)
        // const {product} = this.props.Eachlist
        return(
            <>
                <div className = "shelf-item">
                
                    <Thumb 
                        classes = "shelf-item__thumb"
                        alt = {this.props.Eachlist.title}
                        src = {require(`./../../../static/products/${this.props.Eachlist.sku}_2.jpg`)}
                       
                    
                    />

                     <div className = "shelf-item__details">
                        <p className = "title">{this.props.Eachlist.title}</p>
                        <p className = "desc">
                             { `${this.props.Eachlist.availableSizes[0]}  |  ${this.props.Eachlist.style}` }<br/>
                            Quantity : {this.props.Eachlist.quantity}
                        </p>
                    </div> 

                   <div className="shelf-item__price">
                        <p>{`${this.props.Eachlist.currencyFormat}  ${this.props.Eachlist.price}`}</p>
                    </div>  
                
                </div>
            </>
        )
    }
}