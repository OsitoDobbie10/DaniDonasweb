import {supabase}  from  "../index";
export const MostrarTipoPedido = async()=>{
    try {
    const {data} = await supabase.from("TipoPedido").select();
    return data
    } catch (error) {
    console.log(error)
    }};