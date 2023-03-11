import React from 'react';
import classes from "./CartItem.module.css";
import HeaderButton from "../HeaderButon";
import deleteImg from "../../assets/products/delete.png"
import sneakerImg from "../../assets/products/image.jpg"

const CartItem = () => {
    return (
        <div className={classes.container}>
            <img className={classes.item__img} src={sneakerImg} alt=""/>
            <div className={classes.item__info}>
                <h3 className={classes.item__title}>Мужские Кроссовки Nike Air Max 270</h3>
                <span className={classes.item__price}>12 999 руб.</span>
            </div>
            <HeaderButton img={deleteImg}/>
        </div>
    );
};

export default CartItem;