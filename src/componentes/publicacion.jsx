import React, { Component } from 'react';
import './publicacion.css';

class Publicacion extends Component {

    constructor(props ){
        super(props);
        this.noteContent  = this.props.noteContent;
        this.idPublicacion = this.props.idPublicacion;
    }

     RemoverPublicacion(id){
         alert('remove: ', id  )
        
        }    

    render(){
        return(
            <div className="publicacion">
                <span
                onClick = {() => {this.RemoverPublicacion(this.idPublicacion)}}               
                >&times;</span>
                <p>{this.noteContent}</p>

            </div>
        )

    }
}
export default  Publicacion;