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
    }
}

export const BorrarPedido = async(p)=>{
    try {
        const {data} = await supabase.from("pedido").delete().eq("IdPedidoCliente",p.IdPedidoCliente).eq("id",p.id);
        if(data){
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