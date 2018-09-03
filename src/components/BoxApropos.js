import React, {Component} from "react";
import {Button} from 'mdbreact';
import '../App.css'
class BoxApropos extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div>

<br/>
<center><h2>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.Prenom}&nbsp;{this.props.Nom}&nbsp;&nbsp;<Button bsStyle="primary" onClick={() => this.props.hizApropos(this.props.index)} >X</Button></h2>
<h3>{this.props.Poste}</h3>
<h3>{this.props.Adress}</h3>
<h3>{this.props.NumTel}</h3>
<h3>{this.props.Des}</h3>
</center>
<div  className="btnn"></div>
</div>
     		
		);
	}
}

export default BoxApropos;