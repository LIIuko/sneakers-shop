import React from 'react';
import classes from "./ProductItem.module.css";
import likeImg from '../../assets/products/like.png'
import noLikeImg from '../../assets/products/noLike.png'
import plusImg from '../../assets/products/plus.png'
import addedImg from '../../assets/products/added.png'
import HeaderButton from "../HeaderButon";
import {useSomeState} from "../../hooks/setState";

const ProductItem = ({sneaker, add, addToCart}) => {

    const [like, setLike] = useSomeState(noLikeImg, likeImg);

    return (
        <div className={classes.container}>
            <div className={classes.container__img}>
                {/*<HeaderButton img={like} imgStyle={classes.like__img} className={classes.container__like} onClick={setLike} />*/}
                <img className={classes.main__img} src={sneaker.srcImg} alt=""/>
            </div>
            <h3 className={classes.title__product}>{sneaker.title}</h3>
            <div className={classes.price__container}>
                <div className={classes.price__container__text}>
                    <span className={classes.price__text}>
                        Цена:
                    </span>
                    <span className={classes.price}>
                        {sneaker.price} руб.
                    </span>
                </div>
                <HeaderButton img={add ? addedImg : plusImg} className={classes.container__plus} onClick={(event) => addToCart(sneaker)} />
            </div>
        </div>
    );
};

export default ProductItem;