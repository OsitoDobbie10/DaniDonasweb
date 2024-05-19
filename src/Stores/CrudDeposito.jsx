import {supabase} from "../index"

export const MostrarCuentaDeposito = async()=>{
    try {
     const {data,error} = await supabase.from("Deposito").select();
     if(data){
         return data;
     }
 } catch (error) {
     alert(error.error_description || error.message + "MostrarDeposito")
 }}