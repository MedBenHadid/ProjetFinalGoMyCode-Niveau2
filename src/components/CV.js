 import React, {Component} from 'react'
import '../App.css';
import base from '../base';
import Apropos from './AproposComponent';
import Formation from './FormationComponent';
import Experience from './ExperienceComponent';
import Projet from './ProjetComponent';
import Publication from './PublicationComponent';
import Organisation from './OrganisationComponent';
import Certification from './CertificationComponent';
import Competence from './CompetenceComponent';
import Prix from './PrixComponent';
import Design from './Design'
import Langue from './LangueComponent';

class CV extends Component {
    state={Apropos: {},
          Formation:{},
          Experience:{},
          Projet: {},
          Publication: {},
          Organisation: {},
          Prix: {},
          Competence: {},
          Langues: {},
          Certification: {},
          font: "arial",
          color: 'black',
          spacing:'normal'

  }
 componentDidMount() {
   base.syncState(`info/Apropos`, {context: this, state: 'Apropos'});
   base.syncState(`info/Formation`, {context: this, state: 'Formation'});
   base.syncState(`info/Experience`, {context: this, state: 'Experience'});
   base.syncState(`info/Projet`, {context: this, state: 'Projet'});
   base.syncState(`info/Publication`, {context: this, state: 'Publication'});
   base.syncState(`info/Organisation`, {context: this, state: 'Organisation'});
   base.syncState(`info/Prix`, {context: this, state: 'Prix'});
   base.syncState(`info/Competence`, {context: this, state: 'Competence'});
   base.syncState(`info/Langues`, {context: this, state: 'Langues'});
   base.syncState(`info/Certification`, {context: this,state: 'Certification'});
      base.syncState(`info/Prix`, {context: this,state: 'Prix'});

  }
  render() {
    const zina ={
      
      fontFamily: this.state.font,
      lineHeight: this.state.spacing
    }
    return (
     
      <div className="comp-middle-wrap">
      
        <div className="CV" style={zina} >
         <hr className="Hr" style={{'color' : this.state.color}}/>
          <Apropos  Apropos={this.state.Apropos} DeleteApropos={this.DeleteApropos}/>
          <Formation color={this.state.color} Formation={this.state.Formation} DeleteFormation={this.DeleteFormation}/>
          <Experience color={this.state.color} Experience={this.state.Experience} DeleteExperience={this.DeleteExperience}/>
          <Projet color={this.state.color} Projet={this.state.Projet} DeleteProjet={this.DeleteProjet}/>
          <Publication color={this.state.color} Publication={this.state.Publication} DeletePublication={this.DeletePublication}/>
          <Organisation color={this.state.color} Organisation={this.state.Organisation} DeleteOrganisation={this.DeleteOrganisation}/>
          <Certification color={this.state.color} Certification={this.state.Certification} DeleteCertification={this.DeleteCertification}/>
          <Prix color={this.state.color} Prix={this.state.Prix} DeletePrix={this.DeletePrix}/>          
           <Competence color={this.state.color} Competence={this.state.Competence} DeleteCompetence={this.DeleteCompetence}/>   
           <Langue color={this.state.color} Langue={this.state.Langues} DeleteLangue={this.DeleteLangue}/>   
                  
        </div>
        <Design className="comp-right" setColor={this.setColor} setFont={this.setFont} setSpacing={this.setSpacing}/>
      </div>


    );
  }
  DeleteApropos = key => {
    const Apropos = { ...this.props.Apropos};
    Apropos[key] = null;
    this.setState({Apropos});
  }

   DeleteCertification = key => {
    const Certification = { ...this.props.Certification};
    Certification[key] = null;
    this.setState({Certification});
  }
    DeleteFormation = key => {
    const Formation = { ...this.props.Formation};
    Formation[key] = null;
    this.setState({Formation});
  }
    DeleteExperience = key => {
    const Experience = { ...this.props.Experience};
    Experience[key] = null;
    this.setState({Experience});  
  }
    DeleteProjet = key => {
    const Projet = { ...this.props.Projet};
    Projet[key] = null;
    this.setState({Projet});
  }
    DeletePublication = key => {
    const Publication = { ...this.props.Publication};
    Publication[key] = null;
    this.setState({Publication});
  }
    DeleteOrganisation = key => {
    const Organisation = { ...this.props.Organisation};
    Organisation[key] = null;
    this.setState({Organisation});
  }
     DeletePrix = key => {
    const Prix = { ...this.props.Prix};
    Prix[key] = null;
    this.setState({Prix});
  }
  DeleteLangue = key => {
    const Langues  = { ...this.props.Langues};
    Langues[key] = null;
    this.setState({Langues});
  } 
  DeleteCompetence = key => {
    const Competence = { ...this.props.Competence};
    Competence[key] = null;
    this.setState({Competence});
  }
  setColor = color => {
    let oldcolor = {...this.props.color};
    oldcolor = color;
    this.setState({color});
  }
  setFont = font => {
    let oldfont = {...this.props.font};
    oldfont = font;
    this.setState({font});
  }
  setSpacing = spacing => {
    let oldspacing = {...this.props.spacing};
    oldspacing = spacing;
    this.setState({spacing});
  }
}

export default CV
