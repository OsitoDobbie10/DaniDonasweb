import {supabase} from '../index'
export const MostrarDW = async()=>{
    try {
        const {data,error} = await supabase.from("productoCheescake").select();
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "productoCheescake");
    }
}

export const FiltroproductosDW = async(size)=>{
    try {
        const {data,error} = await supabase.from("productoCheescake").select().eq("size",size);
        if(data){
            return data
        }
    } catch (error) {
        alert(error.error_description || error.message + "productoCheescake");
    }
}
