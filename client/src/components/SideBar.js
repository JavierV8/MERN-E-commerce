﻿import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import toggleMenu from '../store/actions/menuToggle';

const SideBar = () => {
    const MenuVisible = useSelector(state => state.menuToggle.MenuVisible);

    const dispatch = useDispatch();

    let menuStyle = {};
    if (MenuVisible) {
        menuStyle = {
            left: '0px',
        };
    }
    const toggleMenuHandler = () => dispatch(toggleMenu());

    return (
        <div
            className="SideBar-container"
            style={menuStyle}
            data-test="component-sideBar"
            data-testid="component-sideBar-id"
            id="menuId"
        >
            <button
                className="sideBar-button"
                onClick={toggleMenuHandler}
                type="button"
                data-test="sideBar-button"
            >
                X
            </button>
            <div className="sideBar-menu" data-test="sideBar-menu">
                <ListGroup>
                    <ListGroupItem action className="sideBar-menu-title">
                        MENU
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/legume">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/legume.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="home-image"
                                />
                                <h4>Legume</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/meat">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/meat.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Meat</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/vegetables">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/vegetable.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="bedBase-image"
                                />
                                <h4>Vegetables</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/fruits">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/fruit.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Fruits</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/fish">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/fish.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Fish</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/drinks">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/drinks.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Drinks</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/frozen">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/frozen.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Frozen</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/pasta">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/pasta.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Pasta</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/sweets">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/sweets.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Sweets</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>

                    <ListGroupItem
                        tag="button"
                        action
                        className="sideBar-menu-group"
                    >
                        <NavLink to="/sauces">
                            <div className="sideBar-link">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        'images/sauces.png'
                                    }
                                    className="sideBar-image"
                                    alt=""
                                    data-test="mattress-image"
                                />
                                <h4>Sauces</h4>
                            </div>
                        </NavLink>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
};

export default SideBar;
