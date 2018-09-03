import React from "react";

import BoxExperience from './BoxExperience'
export default class Education extends React.Component {
    render() {
     const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
        <h2 style={zina}>Experience </h2>
      
           <div className="val1">
                {Object.keys(this.props.Experience).map(
			    key =><BoxExperience
                key={key}
                index={key}
                NomEntreprise = {this.props.Experience[key].NomEntreprise}
                Position = {this.props.Experience[key].Position}
                Debut = {this.props.Experience[key].Debut}
                fin = {this.props.Experience[key].fin}
                Adress = {this.props.Experience[key].Adress}
                Des = {this.props.Experience[key].Des}   
                hezExperience = {this.hezExperience}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezExperience = key => this.props.DeleteExperience(key)
}