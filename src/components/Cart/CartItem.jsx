import React from 'react';
import classes from "./CartItem.module.css";
import HeaderButton from "../HeaderButon";
import deleteImg from "../../assets/products/delete.png"

const CartItem = ({sneaker, deleteFromCart}) => {

    return (
        <div className={classes.container}>
            <img className={classes.item__img} src={sneaker.srcImg} alt=""/>
            <div className={classes.item__info}>
                <h3 className={classes.item__title}>{sneaker.title}</h3>
                <span className={classes.item__price}>{sneaker.price} руб.</span>
            </div>
            <HeaderButton img={deleteImg} onClick={(event) => deleteFromCart(sneaker)}/>
        </div>
    );
};

export default CartItem;