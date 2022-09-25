import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({ product }) => {
	// a mi me gusta asi, pero puedes poner lo que esta 	 
        // dentro de { } ahí arriba en vez de props
	/*const { product, indexValue } = props
	const { removeFromCart } = React.useContext(AppContext)

	const handleRemove = (index) => {
		removeFromCart(index)
	}*/
	const { removeFromCart } = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className="imgClose" 
				src={iconClose} alt="close" 
				onClick={() => removeFromCart(product)}
			/>
		</div>
	);
}

export default OrderItem;