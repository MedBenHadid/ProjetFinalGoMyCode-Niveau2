import React, {Component} from "react";
import {Button} from 'mdbreact';
import '../App.css'
class BoxFormation extends React.Component {
// {console.log(this.props.color)}
	componentWillMount = () => {
	console.log(this.props.color)
}

	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">
<br/>
<Button bsStyle="primary" onClick={() => this.props.hizFormation(this.props.index)} >X</Button><br/>
 Nom d'ecole: {this.props.NomEcole}<br/>
 Niveau d'etude: {this.props.NiveauEtude}<br/>
 Date Debut: {this.props.Debut}<br/>
 Date Fin: {this.props.fin}<br/>
 Description: {this.props.Des}<br/>
 <hr/>
</div>
     		
		);
	}
}

export default BoxFormation;