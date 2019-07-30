// import {addProduct} from './actions';
import {ADD_TOCART} from './acionTypes';
import {ADD_TOCART_ARRAY} from './acionTypes';
// import { state } from 'fs';

const initialProduct ={
    productsali : [],
    addProduct: {
        id: null
    }
}

export default (state = initialProduct, action) =>{

    if(action.type === ADD_TOCART){
        // console.log(state)
        return {
            ...state,
            addProduct : action.payload,
            // products: [...state.products, action.payload]
        }
    }else if(action.type === ADD_TOCART_ARRAY){
        // console.log(action.type)
        // let getUniqProducts = new Set();

        // state.products.map( (pro)=>{
        //   if(getUniqProducts.has(pro)){
        //       return getUniqProducts.delete(pro)
        //     }else{
        //       return getUniqProducts.add(pro)
        //     }
        // })

        // for(let i=0; i<=state.products.length; i++){
        //     if(getUniqProducts.has(state.products[i])){
        //         return getUniqProducts.delete(state.products[i])
        //     }else{
        //         return getUniqProducts.add(state.products[i])
        //         }
        // }
        // let fileter = state.productsali.filter(function(el) { return el.id === action.payload.id; });
        // let pro = [...state.productsali, action.payload];
        // const unique = [...new Set(pro.map(product => product))];
        // const unique = [...new Set(state.products.map(product => product))];
        
        // let uniqeProducts = Array.from(getUniqProducts);
        // console.log("sls")
        // console.log(state.productsali)


        return{
            ...state,
            productsali: [...action.payload],
            // productsali: unique,
            // productsali: action.payload | [],
            addProduct: null
        }

    }else{
        return state
    }
}