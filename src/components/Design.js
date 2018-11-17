import React, {Component} from 'react'
import '../App.css'
import {Button} from 'mdbreact'
class Design extends Component {
  render() {
        const FormStyle = {
      marginLeft: 10,
      webkitBoxShadow: "1px 3px 1px #9E9E9E",
        mozBoxShadow: "1px 3px 1px #9E9E9E",
        boxShadow: "1px 1px 1px #9E9E9E",
        width: 200
    }
    
    return (
      <div className="Design">
      <br></br>
        <select style={FormStyle} width="1000px;" onChange={this.handleFont}> Fonts
          <option value="arial">Arial</option>
          <option value="cursive">Cursive</option>
          <option value="fantasy">Fantasy</option>
        </select>
<br/><br/><br/>
        <select style={FormStyle} width="1000px;" onChange={this.handleSpacing}> Spacing
          <option value="150%">Large</option>
          <option value="110%">normal</option>
          <option value="90%">small</option>
        </select>
        <br/> <br/> <br/>
  
        {/* <Button variant="fab" value="red" color="success" aria-label="Add" onClick={this.handleColor}></Button> */}
        <Button color="indigo" value="blue" onClick={this.handleColor} rounded></Button>
        <Button color="unique" value="#730456" onClick={this.handleColor} rounded></Button>
        <Button color="pink" value="pink" onClick={this.handleColor} rounded></Button>
        <Button color="cyan" value="cyan" onClick={this.handleColor} rounded></Button>
        <Button color="orange" value="#EC7601" onClick={this.handleColor} rounded></Button>
        <Button color="dark-green" value="#017925" onClick={this.handleColor} rounded></Button>
        <Button color="yellow" value="yellow" onClick={this.handleColor} rounded></Button>
        <Button color="brown" value="#644300" onClick={this.handleColor} rounded></Button>
        <Button color="amber" value="#FEAA01" onClick={this.handleColor} rounded></Button>
      </div>
    );
  }
  
  
  handleColor = (event) => {this.props.setColor(event.target.value);};
  handleSpacing = (event) => {this.props.setSpacing(event.target.value);};
  handleFont= (event) => {this.props.setFont(event.target.value);};

}

export default Design
