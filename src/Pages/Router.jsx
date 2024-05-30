import React from 'react';
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import {Home,DaniDonas,DV_Cheescake,
        Login,ErrosRegistes,Preguntas,
        ProductosFavs,Mapa,MisPedidos,Chats,
        Pedidos,Productos,AtencionCliente,Configuracion,
        ErrorNoRegistro,UseGlobal,Direccion,ErrorSinup,ProductoCheescake,ProductoDonna,Test1,Targetas,
        TargetaEdit,ConfirmarPedido,FormaPago,OrdenFinal} from "../index";
export const Router = () => {
    const {token} = UseGlobal();
    const router = createBrowserRouter([ 
        {
            path:"/",
            element:<Home/>,
            errorElement:<Navigate to={"/"}/>
        },
        {
          path:"/DD", 
          element:<Test1/>,
          children:[
            {
              index:true,
              element:token ? <DaniDonas/> : <ErrorNoRegistro valor="Productos DaniDonas"/>
            },
            {
              path:"/DD/:id/pedido",
              element:<ProductoDonna/>
            }

          ]
        },
        {
          path:"/WD",
          element:<Test1/>,
          children:[
          {
            index:true,
            element:token ? <DV_Cheescake/> : <ErrorNoRegistro valor="Productos WD Cheescake"/>
          },
          {
            path:"/WD/:id/pedido",
            element:<ProductoCheescake/>
          }
          ]
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/Error',
          element:<ErrosRegistes/>
        },
        {
          path:"/Preguntas",
          element:token ? <Preguntas/> : <ErrorNoRegistro valor="Preguntas"/>
        },
            
        {
          path:"/Favoritos",
          element: token ? <ProductosFavs/> : <ErrorNoRegistro valor="Tus productos favoritos"/>
        },
        {
          path:"/Pedidos",
          element:token ? <Pedidos/> : <ErrorNoRegistro valor="Pepidos"/>
        },
        {path:"/Chats",
         element:<Chats/>},
         {
          path:"/Carrito",
          element:<Test1/>,
          children:[
            {
              index:true,
              element:token ? <Productos/> : <ErrorNoRegistro valor="Carrito"/>
            },
            {
              path:"/Carrito/:id/Confirmar",
              element:<ConfirmarPedido/>
            }
          ]
         },
         {
          path:"/FormaPago",
          element:<FormaPago/>

         },
         {
          path:"/AtencionCliente",
          element:token ? <AtencionCliente/> : <ErrorNoRegistro valor="Atencion al cliente"/>
         },
         {
          path:"/Configuracion",
          element:token ? <Configuracion datosgenerales={token}/> : <ErrorNoRegistro valor="Configuracion"/>
         },
         {
          path:"/Mapa",
          element: <Mapa/> 
         },
         {
          path:"/OrdenFinal",
          element:<OrdenFinal/>
         },
         {
          path:"/Direccion",
          element:token ? <Direccion/> : <ErrorNoRegistro valor="Direccion"/>
         },
         {
          path:"/Targetas",
          element:token ? <Targetas/> : <ErrorNoRegistro valor="Targetas"/>,
         },
         {
          path:"/Editar",
          element:<TargetaEdit/>
         },
         {
          path:"/ErrorSinup",
          element: <ErrorSinup/>
         }
    ]); 
  return (
    <RouterProvider router={router}/>
  )
}


