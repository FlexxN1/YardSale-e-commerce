import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';

const Orders = ({ setToggle }) => {
	const { state } = useContext(AppContext);

	return (
		<div className="Orders">
			<div className="Orders-container">
				<div className="title-container" onClick={() => setToggle(false)}>
					<img src={arrow} alt="arrow" />
					<h1 className="title">My orders</h1>
				</div>
				<div className="Orders-content">
					{state.cart.map((product) => (
						<OrderItem
							product={product}
							key={`orderItem-${product.id}`}
						/>
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total}</p>
				</div>
				<a href="/checkout"><button className="primary-button">
					Checkout
				</button></a>
			</div>
		</div>
	);
}

export default Orders;