import React from 'react';
import classes from "./Header.module.css";
import logoImg from '../../assets/header/logo.png'
import cartImg from '../../assets/header/cart.svg'
import likeImg from '../../assets/header/like.png'
import profileImg from '../../assets/header/profile.svg'

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
                    <img className={classes.img} src={cartImg} alt=""/>
                    <span className={classes.price}>1205 руб.</span>
                </li>
                <li className={classes.container__img}>
                    <img className={classes.img} src={likeImg} alt=""/>
                </li>
                <li className={classes.container__img}>
                    <img className={classes.img} src={profileImg} alt=""/>
                </li>
            </ul>
        </div>
    );
};

export default Header;