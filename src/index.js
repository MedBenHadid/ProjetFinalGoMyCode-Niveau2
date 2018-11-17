import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter ,
  Route,
  NavLink,Switch
} from 'react-router-dom'


import Apropos from './components/Apropos'
import Formation from './components/Formation'
import Experience from './components/Experience'
import Projets from './components/Projets'
import Publication from './components/Publication'
import Organisation from './components/Organisation'
import Certification from './components/Certifications'
import Prix from './components/Prix'
import Competences from './components/Competences'
import Langues from './components/Langues'
import registerServiceWorker from './components/registerServiceWorker'
import Logo from './static/logo.svg'
import './App.css';
import CV from './components/CV';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
render(
  <BrowserRouter>
    <div className="B">
     

      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
        <NavLink className="navbar-brand" to="/"> <img className="logo" src={Logo} alt="React Router v4" /> </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="TopNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Apropos">A propos</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <NavLink className="nav-link" to="/Formation">Formation</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <NavLink className="nav-link" to="/Experience">Experience</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Projets">Projets</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Publication">Publication</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Organisation">Organisation</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Certification">Certification</NavLink>
            </li>
            &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Prix">Prix & distinctions</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Competences">Competences</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/Langues">Langues</NavLink>
            </li>
             &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
             <li className="nav-item">
              <NavLink className="nav-link" to="/">Telecharger</NavLink>
            </li>
          </ul>
        </div>
      </nav> 
   
        <div className="wrapper">
          <Switch className="comp-left">
              <Route exact path="/" component={Apropos}/>
              <Route path="/Apropos" component={Apropos} />
              <Route path="/Formation" component={Formation}/>
              <Route path="/Experience" component={Experience}/>
              <Route path="/Projets" component={Projets}/>
              <Route path="/Publication" component={Publication}/>
              <Route path="/Organisation" component={Organisation}/>
              <Route path="/Certification" component={Certification}/>
              <Route path="/Prix" component={Prix}/>
              <Route path="/Competences" component={Competences}/>
              <Route path="/Langues" component={Langues}/>
          </Switch>

       
          <CV className="comp-middle" />
        
       
   </div>
 

</div>
</BrowserRouter>,
       
document.getElementById('root'))

registerServiceWorker()
