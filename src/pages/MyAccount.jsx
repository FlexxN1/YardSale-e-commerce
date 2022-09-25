import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Name</label>
						<p className="value">Juan David Moreno Rodriguez</p>
						<label htmlFor="email" className="label">Email</label>
						<p className="value">juandavidx40@gmail.com</p>
						<label htmlFor="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<a href="/new-password"><input type="button" value="Edit" className="secondary-button login-button" /></a>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;