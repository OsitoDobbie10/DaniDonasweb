import {supabase} from '../index';
import Swal from "sweetalert2";
export const InsertaTargeta = async(p)=>{
    try {
        const {data,error} =  await supabase.from("Targetas").insert(p).select();
        if(error){
            Swal.fire({
              icon: "error",
              title: "Fallo...",
              text:"Ya existe un registro con la base de datos" + p.Targetas,
              timer: 5500,
              footer:`<a href="">Listo<a/>`
            });
        }
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Datos Guardados",
                showConfirmButton: false,
                timer: 1500,
              });
          }
       } catch (error) {
        alert(error.error_description || error.message + "insertar Targetas")
       }
};

export const MostrarTargetas = async()=>{
    try {
     const {data,error} = await supabase.from("Targetas").select();
     if(data){
         return data;
     }
 } catch (error) {
     alert(error.error_description || error.message + "MostrarTargetas")
 }}

export const EditarTargeta = async(p)=>{
    try {
        const {error,data} = await supabase.from("Targetas").update(p).eq("idusuario",p.idusuario).eq("id",p.id).select();
        if(error){
            alert("MostrarTargetas",error);
        }
        Swal.fire({
            icon: "success",
            title: "Datos modificados",
            showConfirmButton: false,
            timer: 1500});
    } catch (error) {
        alert(error.error_description || error.message + "MostrarTargetas")
    } 
}

export const BorrarTargeta = async(p)=>{
    try {
        const {error} = await supabase.from("Targetas").delete().eq("idusuario",p.idusuario).eq("id",p.id);
        if(error){
            alert("error al eliminar",error);
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Direccion Borrado",
                showConfirmButton: false,
                timer: 2000
              });
        }

    } catch (error) {
        alert(error.error_description || error.message + "eliminar direccion")   
    }
}
