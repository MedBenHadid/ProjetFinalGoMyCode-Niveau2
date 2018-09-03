import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Experience extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Experience`, {
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
        <TextField style={FormStyle} id="NomEntreprise" label="NomEntreprise" margin="normal"/> 
        <TextField style={FormStyle} id="Position" label="Position" margin="normal"/> 
          <select style={FormStyle} width="1000px;"label="Date Debut" id="Debut" onClick={this.Rselect}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          </select>

 <select style={FormStyle} width="1000px;"label="Date Fin" id="Fin">

  </select>
        <TextField style={FormStyle} id="Adress" label="Adress" margin="normal"/> 
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
      NomEntreprise: document.getElementById('NomEntreprise').value,
      Position: document.getElementById('Position').value,
      Debut: document.getElementById('Debut').value,
      fin: document.getElementById('Fin').value,
      Adress: document.getElementById('Adress').value,
      Des: document.getElementById('Des').value
     };
     return item;
   }
}

export default Experience
