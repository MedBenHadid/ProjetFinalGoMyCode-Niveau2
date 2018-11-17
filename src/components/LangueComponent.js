import React from "react";

import BoxLangue from './BoxLangue'
export default class LangueComponent extends React.Component {
    render() {
     const zina ={
      color :this.props.color,
      display : 'None'
    }
    // if (this.props.Formation == null) {zina.display=='inlineBlock'}
        return (
    <div>
        <h3 style={{'color' : this.props.color}}><u></u></h3>
           <div className="val1">
                {Object.keys(this.props.Langue).map(
			    key=><BoxLangue
             
                key={key}
                index={key}
                Langue = {this.props.Langue[key].Langue}
                Niveau = {this.props.Langue[key].Niveau}
                hezLangue = {this.hezLangue}
                />
                )}
            </div>
        </div>
);  
    }
hezLangue = key => this.props.DeleteLangue(key)
}