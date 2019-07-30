import React from "react";
// import './style.scss';

export default class Openbutton extends React.Component{

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
                    thisis ali husain

                </div>
            </>



        )
    }



}