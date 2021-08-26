import React , { Component }from 'react';
import './Formulario.css';


class FormularioPublicacion extends Component{

    constructor(){
        super();
        this.AgregarPublicacion = this.AgregarPublicacion.bind(this);
    }

    AgregarPublicacion() {
        this.props.AgregarPublicacion(this.publicacionInfo.value);
        this.publicacionInfo.value = '';
        this.publicacionInfo.focus();                
    }
    
    render(){
        return(

             <div className= "formularioPublicacion">
                <input
                ref={input => {this.publicacionInfo = input;}}
                placeholder ="¿Que piensas?"
                type="text" />             

                <button
                onClick={this.AgregarPublicacion}
                >Agregue Publicacion</button>
            </div>
        ) 
           
    }
}
export default FormularioPublicacion;