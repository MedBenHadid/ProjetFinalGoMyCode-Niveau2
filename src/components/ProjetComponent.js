import React from "react";

import BoxProjet from './BoxProjet'
export default class Projet extends React.Component {
    render() {
        const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
        <h2 style={zina}>Projet</h2>
        
           <div className="val1">
                {Object.keys(this.props.Projet).map(
			    key =><BoxProjet
                key={key}
                index={key}
                NomProjet = {this.props.Projet[key].NomProjet}
                Debut = {this.props.Projet[key].Debut}
                fin = {this.props.Projet[key].fin}
                Fonction = {this.props.Projet[key].Fonction}
                Site = {this.props.Projet[key].Site}
                Des = {this.props.Projet[key].Des}   
                hezProjet = {this.hezProjet}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezProjet = key => this.props.DeleteProjet(key)
}