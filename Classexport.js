import React from "react";
class Bicycle extends React.Component{
	constructor(){
		super();
		this.state={
			color:"green",
			size:"medium",
			make:"bmx",
			type:"gear"
		};
	}
	render(){
	return <p>I have a {this.state.color} {this.state.make} bicycle</p>
	}
}
export default Bicycle;