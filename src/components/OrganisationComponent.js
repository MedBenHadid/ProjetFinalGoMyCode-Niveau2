import React from "react";

import BoxOrganisation from './BoxOrganisation'
export default class Organisation extends React.Component {
    render() {
    const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
    
      
           <div className="val1">
                {Object.keys(this.props.Organisation).map(
			    key =><BoxOrganisation
                key={key}
                index={key}
                NomOrganisation = {this.props.Organisation[key].NomOrganisation}
                Titre = {this.props.Organisation[key].Titre}
                Associer = {this.props.Organisation[key].Associer}
                Debut = {this.props.Organisation[key].Debut}
                Fin = {this.props.Organisation[key].Fin}
                Des = {this.props.Organisation[key].Des}   
                hezOrganisation = {this.hezOrganisation}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezOrganisation = key => this.props.DeleteOrganisation(key)
}