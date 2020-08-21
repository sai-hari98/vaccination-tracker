import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "../../components/Site/Navbar/Navbar";
import Registration from '../Registration/Registration';

export default class Home extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/register" component={Registration} />
                </Switch>
            </BrowserRouter>
        )
    }
}