import React from "react";

import BoxFormation from './BoxFormation'
export default class FormationComponent extends React.Component {
    render() {
     const zina ={
      color :this.props.color,
      display : 'None'
    }
    // if (this.props.Formation == null) {zina.display=='inlineBlock'}
        return (
    <div>
        <h3 style={{'color' : this.props.color}}><u>Formation</u></h3>
           <div className="val1">
                {Object.keys(this.props.Formation).map(
			    key=><BoxFormation
                DeleteItem = {this.DeleteItem}
                key={key}
                index={key}
                NomEcole = {this.props.Formation[key].NomEcole}
                NiveauEtude = {this.props.Formation[key].NiveauEtude}
                Debut = {this.props.Formation[key].Debut}
                fin = {this.props.Formation[key].fin}
                Des = {this.props.Formation[key].Des } 
                color={this.props.color}
                hizFormation = {this.hizFormation}
                />
                )}
            </div>
        </div>
);  
    }
hizFormation = key => this.props.DeleteFormation(key)
}