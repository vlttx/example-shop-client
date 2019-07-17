import React, {Component} from 'react';
import '../App.css';
import Items from './Items'


const API_URL = process.env.REACT_APP_API_URL
class App extends Component {


	componentDidMount(){
		fetch(`${API_URL}`)
		.then(response => response.json())
		// .then(items => this.setState({items}))
	}
	render() {
		console.log(this.state)
		return(
			<div className="App">
			<Items items={this.state.items} />
			</div>
		);
	}
}

export default App;

