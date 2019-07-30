import {FETCH_PRODUCTS} from './actionTypes';
import {productAPI} from '../util';

export const fetchProducts  = (filters, sort, callBack) =>{
    // console.log("filter");
    // console.log(filters);
    // console.log("sort");
    // console.log(sort);
    return (dispatch) => {
        fetch(` ${productAPI} ` ,{mode: 'cors'}).then(res => {
                // console.log("filter")
                // console.log(filters)
                let resu = res.json()
                // console.log(resu)
                //  let re=resu.json()
                return resu
                
            })
            .then(result => {
                // console.log(result)
                let products = [...result.products]
                // console.log("ali")
                // console.log("products")
                // console.log(products);

                // console.log(products[0].availableSizes[1]);


                if(filters.length > 0){
                    // console.log(filters.length);

                    // let filtersProducts = [];

                   let filtersProducts = products.map( (product)=>{
                        // console.log(product)
                        // retu

                      return  product.availableSizes.map( (size)=>{
                            
                          return  filters.map( (filtersize)=>{
                                
                                if(filtersize === size){

                                    return product;

                                }else{
                                    return null;
                                }
                            
                            })

                        })
                        // return "thisis";
                    })

                    // console.log(filtersProducts)
                    // console.log(filtersProducts.length)

                    let pushProduct = []

                    if(filtersProducts.length > 1){
                        for(let i= 0; i<filtersProducts.length; i++){
            
                            for(let j=0; j<filtersProducts[i].length; j++){

                                if(filtersProducts[i][j][0] != null ){
                                    pushProduct.push(filtersProducts[i][j][0])
                                }

                                if(filtersProducts[i][j][1] != null  ){
                                    
                                    pushProduct.push(filtersProducts[i][j][1])
                                }
                            }

                        }
                    }

                    const uniqueAges = [...new Set( pushProduct.map(obj => obj)) ];
                    // console.log(uniqueAges)


                
            if(sort){

                if(sort === "lowestprice"){  
                    // console.log("sortlentth")
                    // console.log(sort.length)
                    // console.log(uniqueAges)
                    // console.log(uniqueAges[0].price)

                    uniqueAges.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    // console.log(uniqueAges)
                }
                if(sort === "highestprice"){  
                    // console.log("sortlentth")
                    // console.log(sort.length)
                    // console.log(uniqueAges)
                    // console.log(uniqueAges[0].price)

                    uniqueAges.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                    // console.log(uniqueAges)
                }
            }

                


                callBack()
                return dispatch({
                    type : FETCH_PRODUCTS,
                    payload : uniqueAges
                })
            }


            if(sort){

                if(sort === "lowestprice"){  
                    // console.log("sortlentth")
                    // console.log(sort.length)
                
                    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    // console.log(products)
                }
                if(sort === "highestprice"){  
                    // console.log("sortlentth")
                    // console.log(sort.length)

                    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                    // console.log(products)
                }
            }



                callBack()
                return dispatch({
                    type : FETCH_PRODUCTS,
                    payload : products
                })
            })
    }
}