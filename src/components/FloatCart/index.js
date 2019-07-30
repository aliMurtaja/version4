import React from "react";
import Closebutton from './ToggleButton/Closebutton';
import Openbutton from './ToggleButton/Openbutton';
import {connect} from 'react-redux';
import {addToCart} from './../../services/cart/actions';
// import Cartproductsali from './Cartproducts/index';


import './style.scss';
import ContentOfCart from "./ContentOfCart";


class FloatCart extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    state = {
        isOpen: false
      };


    
    openCart = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }   

    closeCart = () =>{
        // alert(";asd")
        this.setState({
            isOpen: !this.state.isOpen
        },()=>{
            // console.log(this.state.isOpen)
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        // if(nextProps.cartReducer.addProducts !== this.props)

        // console.log("All")
        // console.log(nextProps.AllCartProducts)
        // console.log("All")
        // console.log(this.props.addProduct)

        if(nextProps.addProduct !== null){  
            this.props.addToCart(nextProps.addProduct, nextProps.AllCartProducts);
            return true;
        }

        return true;
    }

    render(){

        // console.log("All")
        // console.log(this.props.AllCartProducts)
        // console.log("All")

        const {isOpen} = this.state;
        let Cartproducts =null;

        if(isOpen){
            Cartproducts = <ContentOfCart  
                AllCartProducts= {this.props.AllCartProducts}
            />
           
            // <Cartproductsali AllCartProducts= {this.props.AllCartProducts} />
        }else{
            Cartproducts = <div/>
        }


        // alert()
        // console.log("ali")
        // console.log(this.state.isOpen)
       
        
        // classes for open and close the button
        let closeClasses = 'float-cart';
        let openClasses ='float-cart--open float-cart';

        let ToggleButton = null;
        let cart = null;

        // use the Closebutton component
        if(isOpen === false){
             ToggleButton = <Closebutton 
                classes = "bag bag--float-cart-closed"
                onClick = {this.openCart}    
                
            />
        }else{  //use the Openbutton Componet
             ToggleButton = <Openbutton 
                classes = "float-cart__close-btn"
                onClick = {this.closeCart}    
                />
        }
        
        // open
        if(isOpen){
          cart = <div className={ openClasses  } >
                {ToggleButton}

                {Cartproducts}
            </div>
        }else{ //close
          cart = <div className={ closeClasses  } >
                {ToggleButton}
                {/* {Cartproducts} */}

            </div>
        }

        return(

            <>
            {/* If cart is closed, then open the CloseButton component */}
                {cart}
                {/* <Cartproducts/> */}
                {/* <CartProducts/> */}
            </>



        )
    }



}

function mapStateToProps(state){
    return{
        AllCartProducts: state.cartReducer.productsali,
        addProduct: state.cartReducer.addProduct        
    }
}

export default connect(mapStateToProps, {addToCart} )(FloatCart)