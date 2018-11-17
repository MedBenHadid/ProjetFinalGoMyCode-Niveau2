import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Langue extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Langues`, {
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
        
        <TextField style={FormStyle} id="Langue" label="Langue" margin="normal"/> <br/>
          <select style={FormStyle}  label="Niveau" id="Niveau">
            <option>Niveau</option>
            <option>Notions élémentaires</option>
            <option>Compétence professionnelle limitée</option>
            <option>Compétence professionnelle</option>
            <option>Compétence professionnelle complète</option>
            <option>Bilingue ou langue natale</option>                 
          </select>

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
      Langue: document.getElementById('Langue').value,
      Niveau: document.getElementById('Niveau').value
     };
     return item;
   }
}

export default Langue
