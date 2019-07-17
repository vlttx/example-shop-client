import React from 'react'

const Login = ({handleLoginFormSubmit, handleChange, email, password}) => {
	return (
		<div className="Login">
		<form onSubmit={handleLoginFormSubmit}>
		<input 
		type="email"
		name="email"
		onChange={handleChange}
		/><br />
		<input 
		type="password"
		name="password"
		placeholder="password"
		onChange={handleChange}
		/>
		<br />
		<input 
		type="submit"
		value="Login"
		/>
		</form>
		</div>
		)
}

export default Login