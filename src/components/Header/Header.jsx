import React, {useEffect, useState} from 'react';
import classes from "./Header.module.css";
import logoImg from '../../assets/header/logo.png'
import cartImg from '../../assets/header/cart.svg'
import likeImg from '../../assets/header/like.png'
import profileImg from '../../assets/header/profile.svg'
import HeaderButton from "../HeaderButon";
import Cart from "../Cart/Cart";
import {useSomeState} from "../../hooks/setState";


const Header = ({sneakersCart, deleteFromCart}) => {

    const [openCart, setOpenCart] = useSomeState(false, true);
    const [totalSum, setTotalSum] = useState(0);
    useEffect( () => {
        const sum = [...sneakersCart].reduce((sum, sneaker) => sum+sneaker.price, 0);
        setTotalSum(sum);
    },[sneakersCart])

    return (
        <div className={classes.navbar}>
            {
                openCart
                    ?
                    <Cart deleteFromCart={deleteFromCart} sneakersCart={sneakersCart} onClose={() => setOpenCart}/>
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
                    <span className={classes.price}>{totalSum} руб.</span>
                </li>
                {/*<li className={classes.container__img}>*/}
                {/*    <HeaderButton onClick={openLike} img={likeImg} className={classes.button}/>*/}
                {/*</li>*/}
                {/*<li className={classes.container__img}>*/}
                {/*    <HeaderButton onClick={openProfile} img={profileImg} className={classes.button}/>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default Header;