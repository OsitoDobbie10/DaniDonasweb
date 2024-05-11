import {create} from "zustand";
import {MostrarRestaurantes,
        MostrarPromociones,
        MostrarTipoPedido,
        MostrarClientes,
        Mostrardireccion,
        Editardireccion,
        Borrardireccion,
        Mostrarproductosdanielita,
        Filtroproductos,
        MostrarDW,
        FiltroproductosDW,
        MostarPedido,
        MostarFav,
        showrecoger,
        showencargo,
        MostrarCuenta,
        MostrarTargetas
        } from "../index";
export const ViewRestaurantes = create((set,get)=>({
    pedidos:[],
    restaurantes: [],
    promociones:[],
    usuario:[],
    direccion: [],
    parametros:{},
    donitas:[],
    cheescake:[],
    pedidosDonnas: [],
    favoritos: [],
    encargo:[],
    recoger:[],
    cuenta:[],
    targetas:[],
    idUsuario: 0,
    tipo: "Domicilio",
    cod: "D",
    descp: "Que desea pedir hoy",
    getpedido: async ()=>{
     const response3 = await MostrarTipoPedido();
     set({pedidos:response3});
     return response3
    },
    getrestaurantes: async ()=>{
        const response = await MostrarRestaurantes();
        set({restaurantes:response});
        return response
    },
    getpromociones: async ()=>{
        const response2 = await MostrarPromociones();
        set({promociones:response2});
        return response2
    },
    setPedido: (p)=>{
        set({tipo:p.tipo});
        set({cod:p.cod});
        set({descp:p.descp});
    },
    showusuario: async()=>{
     const show = await MostrarClientes();
     set({usuario:show});
     if(show){
        set({idUsuario:show.id});
        return show
     }
     else{
        {key:"Salio mal algo"}
     }
    },
    showdireccion: async(p)=>{
        const response = await Mostrardireccion(p);
        set({direccion:response});
        set({parametros:p});
        return direccion;
    },
    showdanielita: async()=>{ 
        const show = await Mostrarproductosdanielita();
        set({donitas:show});
       return show;
    },
    showdanielita2: async(promo)=>{
        const {donitas} = get();
        if(promo === "Todos"){
          const show1 = await Mostrarproductosdanielita();
          set({donitas:show1});
          return show1
        }
        else{
            const show2 = await Filtroproductos(promo);
            set({donitas:show2});
            return show2
        }
       
    },
    showDWcheescake: async()=>{
     const show = await MostrarDW();
     set({cheescake:show});
     return show
    },
    showDWcheescake2: async(size)=>{
      if(size === "Todos"){
        const show3 = await MostrarDW();
        const {cheescake} = get();
        set({cheescake:show3});
        return show3;
      }
      else{
        const show4 = await FiltroproductosDW(size);
        set({cheescake:show4});
        return show4;
      }

    },
    showPedidoDonnas: async()=>{
     const response =  await MostarPedido();
     set({pedidosDonnas:response});
     return response;
    },

    showfavs: async()=>{
     const response =  await MostarFav();
     set({favoritos:response});
     return response;
    },
    showRecoger: async()=>{
      const response = await showrecoger();
      set({recoger:response});
      return response
    },
    showEncargo: async()=>{
      const response = await showencargo();
      set({encargo:response});
      return response
    },
    showCuentaPersonal: async(p)=>{
      const reponse = await MostrarCuenta(p);
      set({cuenta:reponse});
      return reponse;
    },
    showTargetas: async()=>{
      const response = await MostrarTargetas();
      set({targetas:response})
      return response;
    }

}));