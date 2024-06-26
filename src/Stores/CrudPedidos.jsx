import {supabase} from "../index";
import Swal from "sweetalert2";
export const MostarPedido = async()=>{
    try {
        const {data,error} = await supabase.from("pedido").select();
        return data
    } catch (error) {
       alert(error.error_description || error.message + "Mostrardireccion")
    }
};
export const AgregarPedido = async(p)=>{
    try {
        const {data,error} =  await supabase.from("pedido").insert(p).select();
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Pedido Agregado al carrito",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    } catch (error) {
        alert(error.error_description || error.message + "Agregar Fav") 
    }
}

export const BorrarPedido = async(p)=>{
    try {
        const {error} = await supabase.from("pedido").delete().eq("id",p.id);
        if(error){
        alert("error al eliminar",error);
        }
        else{
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Pedido Borrado",
                showConfirmButton: false,
                timer: 1500,
            })
        }
            
    } catch (error) { 
        alert(error.error_description || error.message + "eliminar pedido")   
    }
}

export const FiltrarPedido = async(p)=>{
    try {
        const {data,error} = await supabase.from("pedido").select().eq("Idusuario",p.Idusuario);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarPedidofiltros");
    }
};
export const editarPedido = async(p)=>{
    try {
        const {error,data} = await supabase.from("pedido").update(p).eq("id",p.id).select();
        if(error){
            alert("MostrarCuenta",error);
        }
        Swal.fire({
            icon: "success",
            title: "Agregar un valor mas al pedido",
            showConfirmButton: false,
            timer: 500});
    } catch (error) {
        alert(error.error_description || error.message + "Editar Pedido")
    } 
}