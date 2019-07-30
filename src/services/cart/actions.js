import {ADD_TOCART} from './acionTypes';
import {ADD_TOCART_ARRAY} from './acionTypes';

export const addProduct = product => {
    // console.log("ali")
    // console.log(product)
    // console.log("yap")
    return {
        type : ADD_TOCART,
        payload : product
    }   

}

export const addToCart = (AddProducts, AllProducts) => {
    // const {AllProducts, AddProducts} = {...rest}
    // console.log(ADD_TOCART_ARRAY)
    // console.log(AllProducts)
    // console.log(AddProducts)

    if(AllProducts.length === 0){
        // console.log(AllProducts.length)
        return {
            type : ADD_TOCART_ARRAY,
            payload : [AddProducts]
        }
    }

//    let al = AllProducts.map( (pro)=>{
//         if(pro.id === AddProducts.id){
//             // pro.quantity++;
//             return {
//                 ...pro,
//                 quantity: pro.quantity+1
//             }
//         }
//             return {
//                 ...pro
//             }
//     })
//     // console.log("al")
//     // al[0].quantity = 0;
//     console.log(al)

//     return {
//         type : ADD_TOCART_ARRAY,
//         payload : al
//     }

    let increamentQuntityProduct = AllProducts.find( (productId)=>{
        if(productId.id === AddProducts.id){
            // console.log("productId")
            // console.log(productId)
            return productId;
        }
        return false;
    })

    if(increamentQuntityProduct){ 
    let createObject = Object.assign( {}, increamentQuntityProduct)
    // console.log("al")
    // console.log(AllProducts)
    // console.log(createObject.quantity++)
    createObject.quantity++;
    
    let ab1 = AllProducts.filter(function(el) { return el.id !== AddProducts.id; }); 
    // console.log("al")
    // console.log(ab1)
    let mar = [...ab1, createObject]
    // console.log("al")
    // console.log(mar)

    return {
        type : ADD_TOCART_ARRAY,
        payload : mar
    }
}

// let arrss = [...AllProducts, ] 

return {
    type : ADD_TOCART_ARRAY,
    payload : [...AllProducts ,AddProducts]
}

    // var index = AllProducts.findIndex(function(o){
    //     return o.id === AddProducts.id;
    // })
    // if (index !== -1) myArr.splice(index, 1);

    //    let al = AllProducts.map( (pro)=>{
    //     if(pro.id === AddProducts.id){
    //         // pro.quantity++;
    //         return {
    //             ...pro,
    //             quantity: pro.quantity+1
    //         }
    //     }
    //         return {
    //             ...pro
    //         }
    // })

    
    
  


    // console.log("amd")
    // console.log(increamentQuntityProduct)

//    let produ = AllProducts.map( (pro)=>{
//         if(pro.id === AddProducts.id){
//             console.log(`same ${pro.quantity}`)
//             return {
//                 ...pro,
//                 quantity: pro.quantity+1
//             }
//             // pro.quantity++
//             // return pro;
//         }
//         return pro;
//     })

    // console.log("al")
    // console.log(produ);

    // if(increamentQuntityProduct !== undefined){
        // var filtered = AllProducts.filter(function(el) { return el.id !== AddProducts.id; }); 
        // console.log("sls")
        // console.log(increamentQuntityProduct);
        // console.log("AllProducts");
        // increamentQuntityProduct.quantity++;
    //    let news = Object.assign( {} ,increamentQuntityProduct);
        // console.log("subs")
    //    news.quantity++; 
        // let newAllProductAfterQuantityIncreament = [...AllProducts, increamentQuntityProduct];
        // console.log(newAllProductAfterQuantityIncreament)
        
    //     return {
    //         type : ADD_TOCART_ARRAY,
    //         payload : increamentQuntityProduct
    //     }

    // }

    // return {
    //     type : ADD_TOCART_ARRAY,
    //     payload : AddProducts
    // }

    // console.log(increamentQuntityProduct);
    // console.log("ins")

    // AllProducts.map( (product)=>{

    // })

    
    

}