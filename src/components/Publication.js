import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Publication extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Publication`, {
     context: this,
     state: 'items',
   });
 }

  
  render() {
    const FormStyle = {
      marginLeft: 50,
      webkitBoxShadow: "1px 3px 1px #9E9E9E",
        mozBoxShadow: "1px 3px 1px #9E9E9E",
        boxShadow: "1px 1px 1px #9E9E9E",
        width: 300
    }
    return (
    <div className="border prop1">
       
    <div className="From">
    <br/> 
       <form onSubmit={this.Envoyer}>
        <TextField style={FormStyle} id="Titre" label="Titre" margin="normal"/> 
        <TextField style={FormStyle} id="Publication" label="Publication" margin="normal"/> 
 <select style={FormStyle} width="1000px;"label="Jour" id="Jour" >
 <option>-Jour-</option>
 <option></option>
 <option></option>
 </select>
 <select style={FormStyle} width="1000px;"label="Mois" id="Mois">
 <option>-Mois-</option>
 <option>2</option>
 <option>3</option>
  </select>
   <select style={FormStyle} width="1000px;"label="Anne" id="Anne">
 <option>-Annee-</option>
 <option>2</option>
 <option>3</option>
  </select>
        <TextField style={FormStyle} id="Site" label="Site" margin="normal"/> 
        <TextField style={FormStyle} id="Des" multiline  label="Parlez nous de vous" rows="8" margin="normal"/> 
        <center><Button color="blue-grey" type="submit">Enregistrer</Button></center>
        </form>
    </div>
    </div>
    );
  }
   Envoyer = e => {
     e.preventDefault(); //ne pas envoyer form
     this.setState(previousState => ({ //concatination l'element ajouter avec state
       items: [...previousState.items, this.createElement()],
     }))
   }

   createElement = () => {
     let item;
     item = {
      Titre: document.getElementById('Titre').value,
      Publication: document.getElementById('Publication').value,
      Jour: document.getElementById('Jour').value,
      Mois: document.getElementById('Mois').value,
      Anne: document.getElementById('Anne').value,
      Site: document.getElementById('Site').value,
      Des: document.getElementById('Des').value
     };
     return item;
   }
}

export default Publication
