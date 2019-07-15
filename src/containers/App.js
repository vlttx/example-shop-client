import React, {Component} from 'react';
import '../App.css';
import Items from './Items'


const items = [
{
	name: "Cat Toy",
	price: 44,
	img_url: "https://cdn.shopify.com/s/files/1/2503/5718/products/cat-toy4.jpg?v=1540762626",
	description: "Practical and fun"
},
{
	name: "Camera",
	price: 599,
	img_url: "https://i5.walmartimages.com/asr/4d5bd045-d0ba-46db-bb59-39a2155bd25d_1.ecb5af3650b9cbcc5bc103144ee79d0e.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
	description: "Take superb pictures!"
},
{
	name: "Notebook",
	price: 3.00,
	img_url: "https://i.etsystatic.com/10467969/d/il/fdd4b9/748376030/il_340x270.748376030_goxk.jpg?version=0",
	description: "Write about your life"
}

]

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			items: []
		}
	}

	componentDidMount(){
		fetch('localhost:3001/api/items')
		.then(response => response.json())
		.then(items => this.setState({items}))
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

