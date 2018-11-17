import React from "react";

import BoxCompetence from './BoxCompetence'
export default class Competence extends React.Component {
    render() {
   const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
        <h2 style={zina}>Competence </h2>
        
           <div className="val1">
                {Object.keys(this.props.Competence).map(
			    key => <BoxCompetence
                key={key}
                index={key}
                Comp = {this.props.Competence[key].Comp}
                progress={this.props.Competence[key].progress}
                hezCompetence = {this.hezCompetence}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezCompetence = key => this.props.DeleteCompetence(key)
}