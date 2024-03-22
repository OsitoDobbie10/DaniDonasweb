import {supabase} from "../index";
export const Mostrarproductosdanielita = async()=> {
   try {
    const {data,error} = await supabase.from("productodonnas").select();
    if(data){
        return data
    }
   } catch (error) {
    alert(error.error_description || error.message + "Mostrarproductos1");
   }
};

export const Filtroproductos = async(promo)=>{
    try {
        const {data,error} = await supabase.from("productodonnas").select().eq("promo",promo);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "Mostrarproductosfiltros");
    }
}



