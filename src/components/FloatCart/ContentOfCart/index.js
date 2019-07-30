import React from 'react';
import FloatCartHeader from '../FloatCartHeader';
import Cartproductsal from '../Cartproducts';
import FloatCartFooter from '../FloatCartFooter';

export default class ContentOfCart extends React.Component{
    render(){
        
        return(
            <>
                <div className="float-cart__content">
                    <FloatCartHeader AllCartProducts ={this.props.AllCartProducts} />
                    <Cartproductsal  AllCartProducts ={this.props.AllCartProducts} />
                    <FloatCartFooter AllCartProducts ={this.props.AllCartProducts} />
                </div>
            </>
        )
    }
}