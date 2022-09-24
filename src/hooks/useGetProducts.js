import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
	/* useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, []) La forma planteada en el curso, tambien funciona. siemrpe y cuando le demos un KEY al componente 'productList' */ 

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
        }
        fetchData();
    }, []);
    
    return products;
};

export default useGetProducts;