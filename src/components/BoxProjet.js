import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxProjet extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">

<br/>
<h3 style={{'color' : this.props.color}}>Projet<Button bsStyle="primary" onClick={() => this.props.hezProjet(this.props.index)} >X</Button></h3>

Nom du Projet: {this.props.NomProjet}<br/>
Date Debut: {this.props.Debut}<br/>
Date Fin: {this.props.fin}<br/>
Fonction: {this.props.Fontion}<br/>
Site: {this.props.Site}<br/>
Description: {this.props.Des}<br/>
</div>
     		
		);
	}
}

export default BoxProjet;