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
}

]

class App extends Component {
	render() {
		return(
			<div className="App">
			<Items items={items} />
			</div>
		);
	}
}

export default App;

