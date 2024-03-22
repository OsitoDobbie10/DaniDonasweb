import {supabase} from "../index"
export const MostrarPromociones = async()=>{
    try {
    const {data} = await supabase.from("promociones").select();
    return data
    } catch (error) {
    console.log(error)
    }};