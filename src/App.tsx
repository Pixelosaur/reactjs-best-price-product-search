import React from 'react';
import './App.scss';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="app-wrapper">
          <Header />

            <div className="container content-wrapper">
                <div className="row">
                    <div className="col">
                        I am the content
                        {/*  Main Content Goes Here  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
