import {supabase} from "../index";
import Swal from "sweetalert2";
export const showrecoger = async()=>{
    try {
        const {data,error} = await supabase.from("recoger").select();
        if(data){
            return data;
        }
    } catch (error) {
        alert(error.error_description || error.message + "recoger");
    }};

export const Insertrecoger = async(p)=>{
    try {
        const {data,error} =  await supabase.from("recoger").insert(p).select();
        if(error){
            Swal.fire({
              icon: "error",
              title: "Fallo...",
              text:"No se pudo registar la peticion",
              timer: 5500,
              footer:`<a href="">Intenta de nuevo..<a/>`
            });
        }
        if(data){
            Swal.fire({
                position:"top-end",
                icon: "success",
                title: "Encargo enviado",
                showConfirmButton: false,
                timer: 1500,
              });
          }
    } catch (error) {
        alert(error.error_description || error.message + "insertar Encargos")
    }

}