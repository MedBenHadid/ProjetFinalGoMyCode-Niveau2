import React, {Component} from 'react'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import {Button} from 'mdbreact'
import base from '../base'
class Competence extends Component {
  state={items: {}}
 componentDidMount() {
   base.syncState(`info/Competence`, {
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
      const FormStyle2 = {
      marginLeft: 50,
      webkitBoxShadow: "1px 3px 1px #9E9E9E",
        mozBoxShadow: "1px 3px 1px #9E9E9E",
        boxShadow: "1px 1px 1px #9E9E9E",
        width: 60
    }
    return (
    <div className="border prop1">
       
    <div className="From">
     
       <form onSubmit={this.Envoyer}>
          <TextField style={FormStyle} id="Comp" label="Compétence" margin="normal"/> 
        
    
    <select style={FormStyle2} id="prog" label="%" margin="normal" maxLength={3}>
        <option value="20">20%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
        <option value="70">70%</option>
        <option value="80">80%</option>
        <option value="90">90%</option>
        <option value="100">100%</option>
     
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
      Comp: document.getElementById('Comp').value,
      progress: document.getElementById('prog').value
     };
     return item;
   }
}

export default Competence
