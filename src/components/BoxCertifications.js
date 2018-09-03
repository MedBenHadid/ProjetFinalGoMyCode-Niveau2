import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxCertification extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">

<br/>
<h3 style={{'color' : this.props.color}}><u>Certification<Button bsStyle="primary" onClick={() => this.props.hezCertification(this.props.index)} >X</Button></u></h3>

Nom Certification: {this.props.NomCertification}<br/>
Autorité: {this.props.Autorité}<br/>
Num licence: {this.props.NumL}
Date Debut: {this.props.Debut}<br/>
Date Fin: {this.props.fin}<br/>
Site: {this.props.Site}<br/>
</div>
     		
		);
	}
}

export default BoxCertification;