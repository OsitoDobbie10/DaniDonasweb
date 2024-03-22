import {supabase} from "../index";
import Swal from "sweetalert2";

export const Insertardireccion = async(p)=>{
    try {
        const {data,error} =  await supabase.from("direccion").insert(p).select();
        if(error){
            Swal.fire({
              icon: "error",
              title: "Fallo...",
              text:"Ya existe un registro con la base de datos" + p.direccion,
              timer: 5500,
              footer:`<a href="">Agrega una nueva descripcion..<a/>`
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
        alert(error.error_description || error.message + "insertar categorias")
       }
};

export const Mostrardireccion = async(p)=>{
   try {
    const {data,error} = await supabase.from("direccion").select();
    if(data){
        return data;
    }
} catch (error) {
    alert(error.error_description || error.message + "Mostrardireccion")
}}
export const Editardireccion = async(p)=>{
    try {
        const {data,error} = await supabase.from("direccion").update().eq("idCliente",p.idCliente).eq("id",p.id);;
        if (error) {
            alert("Error al editar informacion", error);
          }
          Swal.fire({
            icon: "success",
            title: "Datos modificados",
            showConfirmButton: false,
            timer: 1500,
          });
    } catch (error) {
        alert(error.error_description || error.message + "editarInformacion") 
    }
}

export const Borrardireccion = async(p)=>{
    try {
        const {error} = await supabase.from("direccion").delete().eq("idCliente",p.idCliente).eq("id",p.id);
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

export const EliminarTodasDireccion = async(p)=>{
    try {
        const {error} = await supabase.from("direccion").delete().eq("idCliente",p.idCliente);
        if(error){
            alert("error al eliminar",error);
        }
        Swal.fire({
            position:"top-end",
            icon: "warning",
            title: "Direccion eliminada",
            showConfirmButton: false,
            timer: 1000,
          });
    } catch (error) {
        alert(error.error_description || error.message + "eliminar categorias")   
    }
}