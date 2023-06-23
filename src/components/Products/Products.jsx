import React from 'react';
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const Products = ({sneakers, isLoading, sneakersCart, addToCart}) => {

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1 className={classes.container__title}>Все кроссовки</h1>
                <input className={classes.search} placeholder={'Поиск...'} type="text"/>
            </div>
            <div className={classes.container__products}>
                {isLoading
                    ?
                    <></>
                    :
                    sneakers.map(sneaker => (
                        <ProductItem key={sneaker.id}
                                     sneaker={sneaker}
                                     add={sneakersCart.find(sneakerCart => sneakerCart.id === sneaker.id)}
                                     addToCart={addToCart}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;