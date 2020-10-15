// Core
import React from 'react';
// Dependencies
import { Route, Switch } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategoryList from './components/CategoryList/CategoryList';
import ProductList from './components/ProductList/ProductList';
// Styles
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="container">
                <div className="row content-wrapper">
                    <div className="col">
                        <Switch>
                            <Route path="/" component={CategoryList} exact />
                            <Route path="/:category/:id/products" component={ProductList} exact />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
