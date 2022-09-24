import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import iconArrow from '@icons/flechita.svg'
import AppContext from '@context/AppContext';


const MyOrder = () => {
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iconArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem indexValue={index} key={index} product={product}/>
				))}
			</div>
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${sumTotal()}</p>
			</div>
			<button className="primary-button">
				Checkout
			</button>
		</aside>
	);
}

export default MyOrder;