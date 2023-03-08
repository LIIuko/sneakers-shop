import React from 'react';
import classes from "./Header.module.css";
import logoImg from '../../assets/header/logo.png'
import cartImg from '../../assets/header/cart.svg'
import likeImg from '../../assets/header/like.png'
import profileImg from '../../assets/header/profile.svg'
import HeaderButton from "../HeaderButon";
import {openCart, openLike, openProfile} from "./index";

const Header = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.container__info}>
                <img className={classes.logo} src={logoImg} alt=""/>
                <div className={classes.info}>
                    <h3 className={classes.info__title}>REACT SNEAKERS</h3>
                    <p className={classes.info__text}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={classes.order}>
                <li className={classes.container__img}>
                    <HeaderButton onClick={openCart} img={cartImg} className={classes.button} imgStyle={classes.img}/>
                    <span className={classes.price}>1205 руб.</span>
                </li>
                <li className={classes.container__img}>
                    <HeaderButton onClick={openLike} img={likeImg} className={classes.button} imgStyle={classes.img}/>
                </li>
                <li className={classes.container__img}>
                    <HeaderButton onClick={openProfile} img={profileImg} className={classes.button} imgStyle={classes.img}/>
                </li>
            </ul>
        </div>
    );
};

export default Header;