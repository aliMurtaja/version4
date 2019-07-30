import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Redirect} from 'react-router-dom';
import RouteList from './RouteList';
import RoutePath from './RoutePath';

export default class Route extends React.Component{

    render(){
        
        return(
            <>
                <Router>
                    <RouteList />
                    <RoutePath />
                </Router>
            </>
        )
    }
}