import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
import {ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap'
class Formation extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Formation`, {
     context: this,
     state: 'items',
   });
 }

  Rselect = () => {
  for (var i = 0; i < 100; i++){
    document.getElementById('Debut').innerHTML="<option value="+i+">"+i+"</option>"
  }

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
        <TextField style={FormStyle} id="NomEcole" label="Nom de l'ecole" margin="normal"/> 
        <TextField style={FormStyle} id="NiveauEtude" label="Niveau d'etude" margin="normal"/> 
        <TextField style={FormStyle} id="Adress" label="Adress" margin="normal"/> 
  
  <select style={FormStyle} width="1000px;"label="Date Debut" id="Debut" onClick={this.Rselect}>
  </select>

 <select style={FormStyle} width="1000px;"label="Date Fin" id="Fin">
 <option>1</option>
 <option>2</option>
 <option>3</option>
  </select>
        <TextField style={FormStyle} id="Des" multiline  label="Description" rows="8" margin="normal"/> 
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
       NomEcole: document.getElementById('NomEcole').value,
       NiveauEtude: document.getElementById('NiveauEtude').value,
       Debut:document.getElementById('Debut').value,
       fin:document.getElementById('Fin').value,
       Des: document.getElementById('Des').value
     };
     return item;
   }
}

export default Formation
