import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Apropos extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Apropos`, {
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
        <TextField style={FormStyle} type='file' label='Upload' accept='.jpg' />
        <TextField style={FormStyle} id="Prenom" label="Prenom" margin="normal"/><br/>
        <TextField style={FormStyle} id="Nom" label="Nom" margin="normal"/> 
        <TextField style={FormStyle} id="Poste" label="Poste" margin="normal"/> 
        <TextField style={FormStyle} id="Adress" label="Adress" margin="normal"/> 
        <TextField style={FormStyle} id="NumTel" label="Num Telephone" margin="normal" type='Number'/> 
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
       Nom: document.getElementById('Nom').value,
       Prenom: document.getElementById('Prenom').value,
       Poste: document.getElementById('Poste').value,
       Adress: document.getElementById('Adress').value,
       NumTel: document.getElementById('NumTel').value,
       Des: document.getElementById('Des').value
     };
     return item;
   }
   
}

export default Apropos
