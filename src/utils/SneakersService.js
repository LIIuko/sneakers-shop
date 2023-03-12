import axios from "axios";


export default class SneakersService{
    static async getAllSneakers () {
        return await axios.get('https://640ddcd6b07afc3b0db857de.mockapi.io/products');
    }

    static async getCartSneakers () {
        return await axios.get('https://640ddcd6b07afc3b0db857de.mockapi.io/cartProduct');
    }

    static postSneaker (sneaker) {
        axios.post('https://640ddcd6b07afc3b0db857de.mockapi.io/cartProduct/', sneaker);
    }

    static deleteSneaker (id) {
        axios.delete(`https://640ddcd6b07afc3b0db857de.mockapi.io/cartProduct/${id}`);
    }
}