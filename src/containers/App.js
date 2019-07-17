import React, {Component} from 'react';
import '../App.css';
import Login from './components/Login'
import Items from './Items'



class App extends Component {
	constructor(props){
		super()
		this.state = {
			currentUser: null,
		}
	}

	render() {
		return(
			<div className="App">
			<Items />
			<Login />
			</div>
		);
	}
}

export default App;

//became a stateless component