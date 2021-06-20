import React from "react";

import Header from "./Header";
import Products from "./Products";
import "../stylesheets/App.css";

const App = () => {
    return (
        <div className="app">
            <header>
                <Header/>
            </header>
            <main>
                <Products />
            </main>
            <footer className="app__footer">
                <span>
                    All Rights Reserved
                </span>
            </footer>
        </div>
    )
}

export default App;