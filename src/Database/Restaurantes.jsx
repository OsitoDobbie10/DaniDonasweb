import zustand from "zustand";
import {supabase} from "../index";
export const MostrarRestaurantes = async()=>{
    try {
    const {data} = await supabase.from("Restaurantes").select();
    return data
    } catch (error) {
    console.log(error)
    }};