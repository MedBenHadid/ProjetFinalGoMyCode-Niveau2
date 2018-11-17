import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxPrix extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">
<br/>
<h3 style={{'color' : this.props.color}}>Prix & distinctions<Button bsStyle="primary" onClick={() => this.props.hezPrix(this.props.index)} >X</Button></h3>

Titre: {this.props.Titre}<br/>
Associer: {this.props.Associer}<br/>
Entité: {this.props.Entite}<br/>
Date: {this.props.Mois}/{this.props.Annee}<br/>
Description: {this.props.Des}<br/>
</div>
     		
		);
	}
}

export default BoxPrix;