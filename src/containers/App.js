import React, {Component} from 'react';
import '../App.css';

import Items from './Items'



class App extends Component {

	render() {
		return(
			<div className="App">
			<Items />
			</div>
		);
	}
}

export default App;

//became a stateless component