import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxOrganisation extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">
<br/>
<h3 style={{'color' : this.props.color}}>Organisation<Button bsStyle="primary" onClick={() => this.props.hezOrganisation(this.props.index)} >X</Button></h3>

Nom Organisation: {this.props.NomOrganisation}<br/>
Titre: {this.props.Titre}<br/>
Associer: {this.props.Associer}<br/>
Date Debut: {this.props.Debut}<br/>
Date Fin: {this.props.fin}<br/>
Description: {this.props.Des}<br/>
</div>
     		
		);
	}
}

export default BoxOrganisation;