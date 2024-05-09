import {supabase,ObtenerIdAuthSupabase} from "../index";
import Swal from "sweetalert2";
export const InsertarUsuarios = async(p)=>{
    try {
        const {data} = await supabase.from("Clientes").insert(p).select();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const MostrarClientes = async()=>{
    try {
        const idaouthsupabase = await ObtenerIdAuthSupabase();
        const {error,data} = await supabase.from("Clientes").select().eq("idaouthsupabase",idaouthsupabase);
        if(error){
            alert("MostrarClientes",error);
        }
        if(data){
            return data[0];
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarClientes")
    }
}

export const editarClientes = async(p)=>{
    try {
        const { error } = await supabase.from("Clientes").update(p).eq("id", p.id);
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

export const MostrarCuenta = async(p)=>{
    try {
        const idaouthsupabase = await ObtenerIdAuthSupabase();
        const {error,data} = await supabase.from("cuenta").select().eq("idusuario",p.idusuario);
        if(error){
            alert("MostrarCuenta",error);
        }
        if(data){
            return data[0];
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarCuenta")
    } 
}

export const EditarCuenta = async(p)=>{
    try {
        const idaouthsupabase = await ObtenerIdAuthSupabase();
        const {error,data} = await supabase.from("cuenta").update(p).eq("idusuario",p.idusuario).select();
        if(error){
            alert("MostrarCuenta",error);
        }
        Swal.fire({
            icon: "success",
            title: "Datos modificados",
            showConfirmButton: false,
            timer: 1500});
    } catch (error) {
        alert(error.error_description || error.message + "MostrarCuenta")
    } 
}
