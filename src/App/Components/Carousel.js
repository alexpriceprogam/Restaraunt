import React, { Component } from 'react';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {image_index: 0}
	}
	incrementImage(){
		this.setState({image_index: this.state.image_index + 1})
	}
	componentDidMount(){
		var intervalID = window.setInterval(() => {
			if (this.state.image_index < this.props.images.length - 1) {
				this.setState({image_index: this.state.image_index + 1})
			}
			else {
				this.setState({image_index: 0})
			}
		}
		, 5000);

	}
	render() {
		let images = this.props.images.map( (image, index) => {
			let display_value = "none"
			if (index == this.state.image_index) {
				display_value = "block"
			}
			let img_src =  require("../Assets/Images/" + image + ".jpg")
			return (<img className="image-asset" data-index={index} style={{position: "fixed", height: "100vh", width: "100%", border: "1px solid black", marginLeft: "15%", display: display_value}} src={img_src} />)
		})
		return (<div>{images} </div>)
	}
}
export default Carousel;