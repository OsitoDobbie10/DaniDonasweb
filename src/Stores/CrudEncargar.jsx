import {supabase} from "../index";
import Swal from "sweetalert2";
export const showencargo = async()=>{
    try {
        const {data,error} = await supabase.from("encargar").select();
        if(data){
            return data; 
        }
    } catch (error) {
        alert(error.error_description || error.message + "recoger");
    }};

export const Insertencargo = async(p)=>{
    try {
        const {data,error} =  await supabase.from("encargar").insert(p).select();
        if(error){
            Swal.fire({
              icon: "error",
              title: "Fallo...",
              text:"No se pudo registar tu encargo",
              timer: 5500,
              footer:`<a href="">Agrega una nueva descripcion..<a/>`
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