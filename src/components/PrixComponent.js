import React from "react";

import BoxPrix from './BoxPrix'
export default class Prix extends React.Component {
    render() {
    const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
            <h2 style={zina}>Prix</h2>

      
           <div className="val1">
                {Object.keys(this.props.Prix).map(
			    key =><BoxPrix
                key={key}
                index={key}
                Titre = {this.props.Prix[key].Titre}
                Associer = {this.props.Prix[key].Associer}
                Entite = {this.props.Prix[key].Entite}
                Mois = {this.props.Prix[key].Debut}
                Annee = {this.props.Prix[key].Annee}
                Des = {this.props.Prix[key].Des}   
                hezPrix = {this.hezPrix}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezPrix = key => this.props.DeletePrix(key)
}