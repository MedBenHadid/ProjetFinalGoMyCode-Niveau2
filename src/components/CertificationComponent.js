import React from "react";

import BoxCertification from './BoxCertifications'
export default class Certification extends React.Component {
    render() {
   const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
        <h2 style={zina}>Certification </h2>
        
           <div className="val1">
                {Object.keys(this.props.Certification).map(
			    key => <BoxCertification
                key={key}
                index={key}
                NomCertification = {this.props.Certification[key].NomCertification}
                Autorité = {this.props.Certification[key].Autorité}
                NumL = {this.props.Certification[key].NumL}
                Debut = {this.props.Certification[key].Debut}
                fin = {this.props.Certification[key].fin}
                Site = {this.props.Certification[key].Site}   
                hezCertification = {this.hezCertification}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezCertification = key => this.props.DeleteCertification(key)
}