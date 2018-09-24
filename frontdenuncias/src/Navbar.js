import React, {Component} from "react";

class NavBar extends Component {

     constructor(props) {
         super(props);
         
         this.state = {
           onChange: props.onChange
         };
     }
  
    render() {
      return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Home')} href={'#'}>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Denuncias')} href={'#'}>Denuncias</a>
                    </li>                    
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Contactenos')} href={'#'}>¡Contáctenos!</a>
                    </li>            

                  </ul>                  
                </div>
                   <div className="navbar-collapse collapse w-100 order-3">
                    <ul className="navbar-nav ml-auto list-inline">
                      <li className="nav-item list-inline-item">
                           <a className="nav-link" onClick={this.state.onChange.bind(this, 'Login')}  href={'#'}>
                           <i className="fas fa-user-circle"></i> <br/>
                                Login 
                            </a>
                        </li> 
                        <li className="nav-item list-inline-item">
                           <a className="nav-link" onClick={this.state.onChange.bind(this, 'SignUp')}  href={'#'}>
                           <i className="fas fa-sign-in-alt"></i> <br/>
                                Sign Up
                            </a>
                        </li>                    
                      <li className="nav-item list-inline-item">
                        <a className="nav-link" onClick={this.state.onChange.bind(this, 'Denuncia')}  href={'#'}>
                        <i className="fas fa-exclamation-circle"></i> <br/> Denuncie! 
                        </a>
                      </li>                   
                    </ul>            
                </div>
              </div>
            </nav>         
          </div>
      );        
    }
}

export default NavBar;