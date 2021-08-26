import './App.css';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import Publicacion from './componentes/publicacion';
import FormularioPublicacion from './componentes/FormularioPublicaciones/Formulario';
import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfing';
import 'firebase/database';

class App extends Component{

  constructor(){
    super(); 
    this.state = {
      publicacioon:[
         {idPublicacion: 1,noteContent: 'publicacion 1 ejemplo'},
         {idPublicacion: 2,noteContent: 'publicacion 2 prueba'},
         {idPublicacion: 2,noteContent: 'Ingrese una publicacion'},
      ]
    };
    // conexion a la base de datos
    // this.app = firebase.initializeApp(firebaseConfig);
    // this.db = this.app.database().ref().child('publicacioon');    

    this.AgregarPublicacion = this.AgregarPublicacion.bind(this);  
  }

  // componentDidMount(){
  //   const { publicacioon } = this.state;
  //   this.db.on('child_added', snap => {
  //     publicacioon.push({
  //       idPublicacion: snap.key,
  //       noteContent:snap.val().noteContent
  //     })
  //     this.setState({publicacioon })

  //   });
  // }

  EliminarPublicacion(){    
  }

  AgregarPublicacion(publicacion){
    let { publicacioon } = this.state;
    publicacioon.push({
      idPublicacion: publicacioon.length + 1,
      noteContent: publicacion
    });
    this.setState({ publicacion });
  }

  render(){

    return(
      <div className ="PublicacionesConteiner">

        <div className="Header">
          <Login/>          
          <br/>        
        </div>

        <div className ="BodyPublicaciones">
          <ul>
            {
              this.state.publicacioon.map(publicacioon => {
                return (
                  <Publicacion 
                    noteContent ={ publicacioon.noteContent}
                    idPublicacion= { publicacioon.idPublicacion}
                    key={publicacioon.idPublicacion}                
                  />
                )
              })
            }
          </ul>

        </div>

        <div className ="publicacionFooter">

          <FormularioPublicacion  AgregarPublicacion={this.AgregarPublicacion }/>

        </div>

      </div>      
    )};
}

export default App;