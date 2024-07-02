import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Registro</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="Nombre" className="input input-name" />
						<label htmlFor="email" className="label">Email</label>
						<input type="email" id="email" placeholder="Flexx@example.com" className="input input-email" />
						<label htmlFor="email" className="label">Confirmacion Email</label>
						<input type="email" id="email" placeholder="Flexx@example.com" className="input input-email" />
						<label htmlFor="email" className="label">Direccion</label>
						<input type="email" id="email" placeholder="Cra/Calle/#" className="input input-email" />
						<label htmlFor="password" className="label">Contraseña</label>
						<input type="password" id="Contraseña" placeholder="*********" className="input input-password" />
						<label htmlFor="password" className="label">Confirmacion Contraseña</label>
						<input type="password" id="Contraseña" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
