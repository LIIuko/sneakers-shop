import React, {useState} from 'react';
import classes from "./ProductItem.module.css";
import likeImg from '../../assets/products/like.png'
import noLikeImg from '../../assets/products/noLike.png'
import image from '../../assets/products/image.jpg'
import plusImg from '../../assets/products/plus.png'
import addedImg from '../../assets/products/added.png'
import HeaderButton from "../HeaderButon";
import {useSomeState} from "../../hooks/setState";

const ProductItem = () => {

    const [like, setLike] = useSomeState(noLikeImg, likeImg);
    const [add, setAdd] = useSomeState(plusImg, addedImg);

    return (
        <div className={classes.container}>
            <div className={classes.container__img}>
                <HeaderButton img={like} imgStyle={classes.like__img} className={classes.container__like} onClick={setLike} />
                <img className={classes.main__img} src={image} alt=""/>
            </div>
            <h3 className={classes.title__product}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className={classes.price__container}>
                <div className={classes.price__container__text}>
                    <span className={classes.price__text}>
                        Цена:
                    </span>
                    <span className={classes.price}>
                        12 999 руб.
                    </span>
                </div>
                <HeaderButton img={add} className={classes.container__plus} onClick={setAdd} />
            </div>
        </div>
    );
};

export default ProductItem;