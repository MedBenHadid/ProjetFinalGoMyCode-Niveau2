import React, {Component} from "react";
import {Button} from 'mdbreact';
import '../App.css'
class BoxLangue extends React.Component {
// {console.log(this.props.color)}
	componentWillMount = () => {
	console.log(this.props.color)
}

	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">
<br/>
<Button bsStyle="primary" onClick={() => this.props.hezLangue(this.props.index)} >X</Button><br/>
- <u>{this.props.Langue}</u>   Niveau : {this.props.Niveau}<br/>

 <hr/>
</div>
     		
		);
	}
}

export default BoxLangue;