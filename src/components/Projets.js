import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Projet extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Projet`, {
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
     
       <form onSubmit={this.Envoyer}>
        <TextField style={FormStyle} id="NomProjet" label="NomProjet" margin="normal"/> 
          <select style={FormStyle} width="1000px;"label="Date Debut" id="Debut" onClick={this.Rselect}>
          <option>Date Debut</option>
          <option>2</option>
          <option>3</option>
          </select>

 <select style={FormStyle} width="1000px;"label="Date Fin" id="Fin">
 <option>Date Fin</option>
 <option>2</option>
 <option>3</option>
  </select>
  <br/><br/>
  <select style={FormStyle} width="1000px;"label="Fonction" id="Fonction" onClick={this.Rselect}>
          <option>Fonction</option>
          </select><br/>
          
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
      NomProjet: document.getElementById('NomProjet').value,
      Debut: document.getElementById('Debut').value,
      fin: document.getElementById('Fin').value,
      Fonction: document.getElementById('Fonction').value,
      Site: document.getElementById('Site').value,
      Des: document.getElementById('Des').value
     };
     return item;
   }
}

export default Projet
