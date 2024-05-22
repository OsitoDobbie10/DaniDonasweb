import {supabase} from "../index";
import Swal from "sweetalert2";

export const MostarFav = async()=>{
    try {
        const {data,error} = await supabase.from("favoritos").select();
        return data
    } catch (error) {
       alert(error.error_description || error.message + "MostrarFav")
    }
};

export const AgregarFav = async(p)=>{
    try {
        const {data,error} =  await supabase.from("favoritos").insert(p).select();
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Favorito Agregado",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    } catch (error) {
        alert(error.error_description || error.message + "Agregar Fav") 
    }
}

export const BorrarFav = async(p)=>{
    try {
        const {error} = await supabase.from("favoritos").delete().eq("id",p.id);
        if(error){
        alert("error al eliminar",error);
        }
        else{
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Pedido Borrado lista favoritos",
                showConfirmButton: false,
                timer: 1500,
            })
        }
            
    } catch (error) { 
        alert(error.error_description || error.message + "eliminar Favoritos")   
    }
}

export const FiltrarFav = async(p)=>{
    try {
        const {data,error} = await supabase.from("favoritos").select().eq("Idusuario",p.Idusuario);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarFavsfiltros");
    }
}