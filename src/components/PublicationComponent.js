import React from "react";
import BoxPublication from './BoxPublication'
export default class Publication extends React.Component {
    render() {
    const zina ={
      color :this.props.color,
      display : 'None'
    }
        return (
    <div>
        <h2 style={zina}>Publication</h2>
       
           <div className="val1">
                {Object.keys(this.props.Publication).map(
			    key =><BoxPublication
                key={key}
                index={key}
                Titre = {this.props.Publication[key].Titre}
                Publication = {this.props.Publication[key].Publication}
                Jour = {this.props.Publication[key].Jour}
                Mois = {this.props.Publication[key].Mois}
                Anne = {this.props.Publication[key].Anne}
                Site = {this.props.Publication[key].Site}
                Des = {this.props.Publication[key].Des}   
                hezPublication = {this.hezPublication}
                color={this.props.color}
                />
                    
                )}
            </div>
        </div>
);  
    }
      hezPublication = key => this.props.DeletePublication(key)
}