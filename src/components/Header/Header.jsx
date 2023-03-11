import React from 'react';
import classes from "./Header.module.css";
import logoImg from '../../assets/header/logo.png'
import cartImg from '../../assets/header/cart.svg'
import likeImg from '../../assets/header/like.png'
import profileImg from '../../assets/header/profile.svg'
import HeaderButton from "../HeaderButon";
import {openLike, openProfile} from "./index";
import Cart from "../Cart/Cart";
import {useSomeState} from "../../hooks/setState";

const Header = () => {

    const [openCart, setOpenCart] = useSomeState(false, true);

    return (
        <div className={classes.navbar}>
            {
                openCart
                    ?
                    <Cart onClose={() => setOpenCart}/>
                    :
                    <></>
            }
            <div className={classes.container__info}>
                <img className={classes.logo} src={logoImg} alt=""/>
                <div className={classes.info}>
                    <h3 className={classes.info__title}>REACT SNEAKERS</h3>
                    <p className={classes.info__text}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={classes.order}>
                <li className={classes.container__img}>
                    <HeaderButton onClick={setOpenCart} img={cartImg} className={classes.button}/>
                    <span className={classes.price}>1205 руб.</span>
                </li>
                <li className={classes.container__img}>
                    <HeaderButton onClick={openLike} img={likeImg} className={classes.button}/>
                </li>
                <li className={classes.container__img}>
                    <HeaderButton onClick={openProfile} img={profileImg} className={classes.button}/>
                </li>
            </ul>
        </div>
    );
};

export default Header;