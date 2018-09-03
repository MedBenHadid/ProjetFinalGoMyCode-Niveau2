import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxExperience extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">

<br/>
<h3 style={{'color' : this.props.color}}>Experience<Button bsStyle="primary" onClick={() => this.props.hezExperience(this.props.index)} >X</Button></h3>

Nom d'entreprise: {this.props.NomEntreprise}<br/> 
Position: {this.props.Position}<br/> 
Adresse {this.props.Adress}<br/> 
Date Debut: {this.props.Debut}<br/> 
Date Fin: {this.props.fin}<br/> 
Description: {this.props.Des}<br/> 
</div>
     		
		);
	}
}

export default BoxExperience;