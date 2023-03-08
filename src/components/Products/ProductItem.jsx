import React, {useState} from 'react';
import classes from "./ProductItem.module.css";
import likeImg from '../../assets/products/like.svg'
import image from '../../assets/products/image.jpg'
import plus from '../../assets/products/plus.svg'
import {addLike} from "./index";
import LikeButton from "../LikeButton";

const ProductItem = () => {

    const [fill, setFill] = useState('#ECECEC');
    const [buttonColor, setButtonColor] = useState('#fff');
    const addLike = () => {
        if(fill === '#ECECEC'){
            setFill('#FF8585');
            setButtonColor('#FEF0F0');
        }else{
            setFill('#ECECEC');
            setButtonColor('#fff');
        }
    }

    return (
        <div className={classes.card}>
            <div className={classes.container}>
                <div className={classes.container__img}>
                    <LikeButton style={{background: buttonColor}} className={classes.container__like} onClick={addLike} fill={fill}/>
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
                    <div className={classes.container__plus__img}>
                        <img className={classes.add__button} src={plus} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;