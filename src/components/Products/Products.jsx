import React from 'react';
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const Products = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1 className={classes.container__title}>Все кроссовки</h1>
                <input className={classes.search} placeholder={'Поиск...'} type="text"/>
            </div>
            <div className={classes.container__products}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
};

export default Products;