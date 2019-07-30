import React from 'react';
import ListOfCartProduct from './ListOfCartProduct'

export default class Cartproductsal extends React.Component{
    render(){
        let [...AllCartProducts] = this.props.AllCartProducts
        // console.log("alww")
        // console.log(AllCartProducts);
        // console.log(this.props.AllCartProducts);

        let list= null;

        if(AllCartProducts.length > 0){
            console.log("hh")
            console.log(AllCartProducts);
            if(AllCartProducts[0].id != null){
                console.log("venom")
                console.log(AllCartProducts);
                console.log(AllCartProducts.length);
                list= AllCartProducts.map( (Eachlist)=>{
                    return <ListOfCartProduct 
                        Eachlist ={Eachlist}
                        key={Eachlist.id}
                    />
                    // return Eachlist
                })
            }else{
                list = <div>
                            <p className ="shelf-empty">
                                Add Some Products Into Your Cart ai
                            </p>
                        </div>
            }
            

        }else{
            list = <div>
                        <p className ="shelf-empty">
                            Add Some Products Into Your Cart
                        </p>
                   </div>
        }
 
       

        // console.log("alms")
        // console.log(al)
        
        return(
            <>
                <div className="float-cart__shelf-container">
                    {list} 
               </div>
            </>
        )
    }
}