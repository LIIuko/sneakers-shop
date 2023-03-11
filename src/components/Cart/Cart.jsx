import React from 'react';
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import buyImg from '../../assets/products/buy.svg'
import HeaderButton from "../HeaderButon";
import deleteImg from "../../assets/products/delete.png";

const Cart = ({onClose}) => {
    return (
        <div className={classes.background}>
            <div className={classes.container__cart}>
                <div className={classes.cart__container__title}>
                    <h2 className={classes.cart__title}>Корзина</h2>
                    <HeaderButton onClick={onClose()} img={deleteImg}/>
                </div>
                <div className={classes.cart__list}>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className={classes.result__block}>
                    <div className={classes.summ__result}>
                        <span className={classes.total}>Итого: </span>
                        <span className={classes.between}></span>
                        <span className={classes.total__price}>21 498 руб.</span>
                    </div>
                    <div className={classes.summ__result}>
                        <span className={classes.total}>Налог 5%: </span>
                        <span className={classes.between}></span>
                        <span className={classes.total__price}>1074 руб.</span>
                    </div>
                    <button className={classes.buy}>
                        <span></span>
                        <span className={classes.button__text}>
                            Оформить заказ
                        </span>
                        <img src={buyImg} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;