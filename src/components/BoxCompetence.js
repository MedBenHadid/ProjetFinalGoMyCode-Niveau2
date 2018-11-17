import React, {Component} from "react";
import {Button,Progress} from 'mdbreact';
class BoxCompetence extends React.Component {
	render(){
            //let Num = this.props.NumTel.value;
            const ProgressBar={
                width : 400,
                display: 'inline-block'
            }
		return(
<div className="CvContenu">

<br/>
<h3 style={{'color' : this.props.color}}>Competence<Button bsStyle="primary" onClick={() => this.props.hezCompetence(this.props.index)} >X</Button></h3>

* {this.props.Comp}&nbsp;&nbsp;&nbsp;&nbsp;
<div style={ProgressBar}>
<Progress value={this.props.progress} color="success" Style={ProgressBar} animated ></Progress>
</div>
</div>
     		
		);
	}
}

export default BoxCompetence;