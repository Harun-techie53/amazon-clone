import React from "react";

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import "../stylesheets/Header.css";

const Header = () => {
    return (
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-start">
                <IconButton className="fs-2">
                    <MenuIcon fontSize="large" style={{ color: "white" }} />
                </IconButton>
                <span className="fw-bolder fs-2 header__text col">
                    amazona
                </span>
            </div>
            <form className="d-flex align-items-center header__searchBar">
                <input className="form-control searchBar" placeholder="Search" />
                <SearchIcon fontSize="large" style={{ backgroundColor: "yellow", borderRadius: "5px" }} />
            </form>
            <div className="d-flex align-items-center header__container">
                <a href="#">
                    Amazona
                </a>
                <a href="#" className="m-2">Cart</a>
                <a href="#" className="m-2">User</a>
            </div>
        </div>
    )
}

export default Header;