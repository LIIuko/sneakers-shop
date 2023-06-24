import React, {useEffect, useState} from 'react';
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";
import {useDebounce} from "../../hooks/useDebounce";

const Products = ({sneakers, isLoading, sneakersCart, addToCart}) => {

    useEffect(() => {
        setQuerySneakers(sneakers);
    }, []);

    const [querySneakers, setQuerySneakers] = useState([]);
    const setSneakersQuery = (query) => {
        if(query){
            setQuerySneakers(sneakers.filter(sneaker => sneaker.title.includes(query)));
        }else{
            setQuerySneakers(sneakers);
        }
    }

    const debouncedSearch = useDebounce(setSneakersQuery, 1000);
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
        debouncedSearch(e.target.value);
    }

    return (
        <div className={classes.container}>
            <div className={classes.container__header}>
                <h1 className={classes.container__title}>Все кроссовки</h1>
                <input className={classes.search}
                       placeholder={'Поиск...'}
                       type="text" value={value}
                       onChange={onChange}/>
            </div>
            <div className={classes.container__products}>
                {isLoading
                    ?
                    <></>
                    :
                    querySneakers.map(sneaker => (
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