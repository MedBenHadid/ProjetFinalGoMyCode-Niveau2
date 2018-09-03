import React from "react";

import BoxApropos from './BoxApropos'
export default class AproposComponent extends React.Component {
    render() { 
        return (
    <div>
        
           
           <div className="val1">
           
                {Object.keys(this.props.Apropos).map(
			    key=><BoxApropos
                key={key}
                index={key}
                Prenom = {this.props.Apropos[key].Prenom}
                Nom = {this.props.Apropos[key].Nom}
                Poste = {this.props.Apropos[key].Poste}
                Adress = {this.props.Apropos[key].Adress}
                NumTel = {this.props.Apropos[key].Num }
                Des = {this.props.Apropos[key].Des}   
                hizApropos = {this.hizApropos}
                />
                    
                )}
            </div>
        </div>
);  
    }
    hizApropos = key => this.props.DeleteApropos(key)
     
}