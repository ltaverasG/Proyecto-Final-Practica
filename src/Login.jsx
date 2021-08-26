import React,{useState} from 'react';
import{ auth } from '../src/firebaseConfing';


const Login = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const RegistrarUser = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
        .then((res) => alert('Usuario Registrado'))
        .catch(err => console.log(err))
    }
    return(
        <div className= "mt-4">

            <h2>Muro Interactivo</h2>

            <form onSubmit={RegistrarUser} className= "form-group mt-3">
                <input
                    onChange = {(e) => {setEmail(e.target.value) }}
                    className = "form-control mb-3" type= "email"
                    placeholder= "email"
                />
                <input
                    onChange = {(e) => {setPass(e.target.value) }}
                    className = "form-control mb-3" type= "password"
                    placeholder= "Contraseña"
                />
                <input type ="submit" 
                    className= "btn btn-block btn-info"                                                           
                    value = "Registrar"
                />
            </form>

        </div>
    )
}
export default Login;