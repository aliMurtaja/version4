import React from 'react';
import PropTypes from 'prop-types';
import {Thumb} from '../../../Thumb';
import {addProduct} from './../../../../services/cart/actions';
import {connect} from 'react-redux';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currencyFormat : null,
            price: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps);
        // console.log("alfffi")
        // console.log(prevState);
        if (prevState.currencyFormat !== nextProps.currencyFormat) {
          return {
            // derivedData: computeDerivedState(nextProps),
            currencyFormat: nextProps.currencyFormat
          };
        }

        if (prevState.price !== nextProps.price) {
            return {
              // derivedData: computeDerivedState(nextProps),
              price: nextProps.price
            };
          }
    
        // Return null to indicate no change to state.
        return null;
      }
    

    render(){
        const {product} = this.props;


        let realNumber = Math.floor(product.price);
        // let getDecimal = product.price - Math.floor(product.price)
        // let tofixed = getDecimal.toFixed(2)


        // {console.log(require('../../../../static/products/'+product.sku+'_1.jpg'))}
       
        return(  
            <React.Fragment>
                <div 
                    className = "shelf-item"
                    onClick = {()=>
                        {
                        // console.log("ab")    
                        console.log(this.props.products)
                        // console.log(product)
                        // console.log(product.quantity)     
                        this.props.addProduct(product)}
                        }              
                    // onClick = {()=>alert()}
                    data-sku= {product.sku}

                >
                
                    {product.isFreeShipping && (<div className = "shelf-stopper">Free-Shipping</div>)}

                    <Thumb
                        classes = "shelf-item__thumb"
                        // src = {require(`../../../../static/products/${product.sku}_1.jpg`)}
                        alt = {product.title}
                    
                    />
                    
                    <p className = "shelf-item__title">
                        {product.title}<br />
                        {/* {product.quantity} */}
                        {/* {require(`./../../../../static/products${product.sku}_1.jpg`)} */}
                        {/* {require('../../../../static/'+product.sku+'_1.jpg')} */}
                    </p>

                    <div className="shelf-item__price">
                        <div className="val">
                        <small>{product.currencyFormat}</small>
                        <b>{realNumber}</b>
                        {/* <span>{tofixed}</span> */}
                        </div>
                        {/* {productInstallment} */}
                    </div>s

                    <div className = "shelf-item__buy-btn">
                        Add to cart
                    </div>



                
                </div>
            
            
            </React.Fragment>
        )
    }
}


Product.propTypes = {
    product : PropTypes.object.isRequired
}

function mapState(state){
    return {
        products : state.shelf.products
    }
}

export default connect( mapState, {addProduct} )(Product)