import React, {Component} from "react";
import {Button} from 'mdbreact';
class BoxPublication extends React.Component {
	render(){
        	//let Num = this.props.NumTel.value;
		return(
<div className="CvContenu">

<br/>
<h3 style={{'color' : this.props.color}}>Publication<Button bsStyle="primary" onClick={() => this.props.hezPublication(this.props.index)} >X</Button></h3>

Titre: {this.props.Titre}<br/>
Publication: {this.props.Publication}<br/>
Date: ({this.props.Jour}/{this.props.Mois}/{this.props.Anne})<br/>
Site: {this.props.Site}<br/>
Description: {this.props.Des}<br/>
</div>
     		
		);
	}
}

export default BoxPublication;