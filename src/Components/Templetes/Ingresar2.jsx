import React from 'react'
import styled from 'styled-components';
import {supabase,InsertarUsuarios,UseGlobal,v} from "../../index";
import { useNavigate } from 'react-router-dom';
const Ingresar2 = () => {
    const navigate = useNavigate();
    const {token,setToken,datos,setLogic,logic,obtenerDatos} = UseGlobal();
    const {email:mail,password} = datos;
    const handlesubmit2 = async(e)=>{
        e.preventDefault();
        const objeto = {mail,password}
        if(Object.values(objeto).includes("")){
            setLogic("Todos los campos son necesarios");
            return
        }
        setLogic(null);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: mail,
                password: password});
            if (error) throw error;
            setToken(data);
            navigate("/")
            const params = {
                nombre:data.user.user_metadata.first_name,
                idaouthsupabase:data.user.id
            };
            await InsertarUsuarios(params);
        } catch (error) {
           navigate("/Error")
        }
    };
  return (
    <FormularioLogin onSubmit={handlesubmit2}>
        <span className='Capa'>{}</span>
        <input type="email" placeholder='Email' name="email" value={mail} onChange={obtenerDatos} className="entrada"/>
        <input type="password" placeholder='Contraseña' value={password} name="password" onChange={obtenerDatos} className="entrada"/>
        <div className="Iconos">
        <Botonenviar type="submit">
            Ingresar..
        </Botonenviar>
        </div>
  </FormularioLogin>
  )
}

const FormularioLogin = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:100px;
gap: 15px;
.entrada{
    display: block;
    padding: 10px 40px;
    width: 60%;
    margin:auto;
    border-radius: 8px;
    border:1.5px solid black
}
.Iconos{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.login{
  width:30px;
  height:30px;
  border-radius: 50%;
}
`
const Botonenviar = styled.button`
border-radius: 20px;
font-size: 20px;
font-weight: bold;
padding: 8px 20px;
cursor: pointer;
&:hover{
    background: black;
    color: yellow;
}
`
export default Ingresar2
