import React, {Component} from 'react';
import '../App.css';
import Login from '../components/Login'
import Items from './Items'



class App extends Component {
	constructor(props){
		super()
		this.state = {
			currentUser: null,
			loginForm: {
				email: "",
				password: ""
			}
		}
	}

	handleChange = event => {
		const { name, value } = event.target
	}

	handleLoginFormSubmit = event => {

	}

	render() {
		return(
			<div className="App">
			<Login />
			<Items />
			
			</div>
		);
	}
}

export default App;

//became a stateless component