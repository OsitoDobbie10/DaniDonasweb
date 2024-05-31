import {supabase} from "../index";
import Swal from "sweetalert2";
export const FiltrarOrdenFinal = async(p)=>{
    try {
        const {data,error} = await supabase.from("OrdenFinal").select().eq("IdPedido",p.IdPedido);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "MostrarOrdenFinal");
    }
};

export const AgregarOrdenFinal = async(p)=>{
    try {
        const {data,error} =  await supabase.from("OrdenFinal").insert(p).select();
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Orden Recibida",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    } catch (error) {
        alert(error.error_description || error.message + "Agregar Fav") 
    }
}