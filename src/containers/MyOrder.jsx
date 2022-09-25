import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import iconArrow from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import Checkout from '@pages/Checkout';


const MyOrder = ({ toggleOrders, setToggleOrders}) => {
	/*const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}*/
	const [ toggle, setToggle ] = useState(false);
	const { state } = useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container"
				onClick={() => setToggleOrders(!toggleOrders)}
			>
				<img src={iconArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
			</div>
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${state.total}</p>
			</div>
			<button className="primary-button" onClick={() => setToggle(true)}>
				Checkout
			</button>
			{toggle && <Checkout setToggle={setToggle}/>}
		</aside>
	);
}

export default MyOrder;