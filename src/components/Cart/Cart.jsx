import React, {useEffect, useState} from 'react';
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import buyImg from '../../assets/products/buy.svg'
import HeaderButton from "../HeaderButon";
import deleteImg from "../../assets/products/delete.png";
import empty_box from "../../assets/header/empty_box.jpg";

const Cart = ({onClose, sneakersCart, deleteFromCart}) => {

    const [totalSum, setTotalSum] = useState(0);
    useEffect( () => {
        const sum = [...sneakersCart].reduce((sum, sneaker) => sum+sneaker.price, 0);
        setTotalSum(sum);
    },[sneakersCart])


    return (
        sneakersCart.length
            ?
            <div className={classes.background}>
                <div className={classes.container__cart}>
                    <div className={classes.cart__container__title}>
                        <h2 className={classes.cart__title}>Корзина</h2>
                        <HeaderButton onClick={onClose()} img={deleteImg}/>
                    </div>
                    <div className={classes.cart__list}>
                        {sneakersCart.map((sneaker) => (
                            <CartItem deleteFromCart={deleteFromCart} key={sneaker.id} sneaker={sneaker}/>
                        ))}
                    </div>
                    <div className={classes.result__block}>
                        <div className={classes.summ__result}>
                            <span className={classes.total}>Итого: </span>
                            <span className={classes.between}></span>
                            <span className={classes.total__price}>{totalSum} руб.</span>
                        </div>
                        <div className={classes.summ__result}>
                            <span className={classes.total}>Налог 5%: </span>
                            <span className={classes.between}></span>
                            <span className={classes.total__price}>{Math.round(totalSum*5) / 100} руб.</span>
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
            :
            <div className={classes.background}>
                <div className={classes.empty__cart__block}>
                    <img className={classes.empty__box} src={empty_box} alt=""/>
                    <h2 className={classes.empty__cart__title}>Корзина пустая</h2>
                    <p className={classes.empty__cart__desc}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <div className={classes.result__block}>
                        <button className={classes.buy} onClick={onClose()}>
                            <img className={classes.button__back} src={buyImg} alt=""/>
                            <span></span>
                            <span className={classes.button__text}>
                            Вернуться назад
                            </span>
                        </button>
                    </div>
                </div>
            </div>


    );
};

export default Cart;