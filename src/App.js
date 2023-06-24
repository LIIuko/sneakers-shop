import './App.css';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import SneakersService from "./utils/SneakersService";

function App() {

    const [sneakers, setSneakers] = useState([]);
    const [isLoading, error, fetching] = useFetching(async () => {
        const response = await SneakersService.getAllSneakers();
        setSneakers(response.data);
    });
    const [sneakersCart, setSneakersCart] = useState([]);
    const [isLoadingCart, errorCart, fetchingCart] = useFetching(async () => {
        const response = await SneakersService.getCartSneakers();
        setSneakersCart(response.data);
    });

    const addToCart = (sneaker) => {
        if(!sneakersCart.find(obj => obj.id === sneaker.id)){
            setSneakersCart([...sneakersCart, sneaker]);
            SneakersService.postSneaker(sneaker);
        }
    }

    const deleteFromCart = (sneaker) => {
        SneakersService.deleteSneaker(sneaker.id);
        setSneakersCart(sneakersCart.filter(obj => obj.id !== sneaker.id));
    }

    useEffect( () => {
        fetching();
        fetchingCart();
    },[])


    return (
        <div className="App">
            <Header deleteFromCart={deleteFromCart} sneakersCart={sneakersCart}/>
            <Products addToCart={addToCart} sneakers={sneakers} sneakersCart={sneakersCart} isLoading={isLoading}/>
        </div>
    );
}

export default App;
