import React from 'react'

const Login = () => {
	return (
		<div className="Login">
		<form onSubmit={handleLoginFormSubmit}>
		<input 
		type="email"
		name="email"
		onChange={this.handleChange}
		/><br />
		<input 
		type="password"
		name="password"
		placeholder="password"
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