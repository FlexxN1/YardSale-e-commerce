import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import arrow from '@icons/flechita.svg';
import '@styles/Checkout.scss';

const Checkout = ({ setToggle }) => {
	const { state } = useContext(AppContext);
	const today = new Date(Date.now()).toLocaleString().split(', ')[0];
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<div className="title-container">
					<img className='arrowImg' src={arrow} alt="arrow" onClick={() => setToggle(false)}/>
					<h1 className="title2">My order</h1>
				</div>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{today}</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${state.total}</p>
					</div>
				</div>
				<div className='containerProducts'>
					{state.cart.map((product) => (
						<OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Checkout;