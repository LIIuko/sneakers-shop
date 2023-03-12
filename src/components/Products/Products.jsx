import React, {useEffect, useState} from 'react';
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";
import SneakersService from "../../utils/SneakersService";
import {useFetching} from "../../hooks/useFetching";

const Products = () => {

    const [sneakers, setSneakers] = useState([]);
    const [isLoading, error, fetching] = useFetching(async () => {
        const response = await SneakersService.getAllSneakers();
        setSneakers(response.data);
    });

    useEffect( () => {
        fetching();
    },[])

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
                        <ProductItem key={sneaker.id} sneaker={sneaker}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;