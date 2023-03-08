import React from 'react';
import classes from "./ProductItem.module.css";

const ProductItem = () => {
    return (
        <div className={classes.card}>
            <div className={classes.container}>
                <div className={classes.container__img}>
                    <img className={classes.like__img} src="" alt=""/>
                    <img className={classes.main__img} src="" alt=""/>
                </div>
                <h3 className={classes.title__product}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
                <div className={classes.price__container}>
                    <div>
                        <span className={classes.price__text}>
                            Цена:
                        </span>
                        <span className={classes.price}>
                            12 999 руб.
                        </span>
                    </div>
                    <img className={classes.add__button} src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;