import React from "react";
// import './style.scss';

export default class Closebutton extends React.Component{
    
    onClick = () =>{
        this.props.onClick()
    }

    render(){
        
        return(

            <>
                <div 
                    className = {this.props.classes}
                    onClick = {this.onClick}
                
                
                >
                </div>
            </>



        )
    }



}