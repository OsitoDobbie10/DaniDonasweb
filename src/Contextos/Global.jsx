import { createContext,useState,useEffect,useRef } from 'react'
export const Stade = createContext();
const Global = ({children}) => {
  const [openspinnerloading,setOpenspinnerloading] = useState(true);
  const [openslider,setOpenslider] = useState(false);
  const [modal,setModal] = useState(false);
  const [animandoModal,setAnimandoModal] = useState(false);
  const [animandoModal2,setAnimandoModal2] = useState(false);
  const [abrirRegistror,setAbrirRegistro] = useState(true);
  const [abrir,setAbrir] = useState(true);
  const [modal2,setModal2] = useState(false); 
  const [show,setShow] = useState(null);
  const [animandoModal3,setAnimandoModal3] = useState(true); 
  const [datos,setDatos] = useState({nombre:"",email:"",password: ""});
  const obtenerDatos = (e)=>{
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }
  const [logic,setLogic] = useState(null);
  const [error,setError] = useState(true);
  const [token,setToken] = useState(false);
  if (token){
    sessionStorage.setItem("token",JSON.stringify(token));
  }
  useEffect(()=>{
    sessionStorage.getItem("token"); 
    let data = JSON.parse(sessionStorage.getItem("token"));
    setToken(data)
  },[])
  const [modal3,setModal3] = useState(false);
  const [animandoModal4,setAnimandoModal4] = useState(true);
  const [modal5,setModal5] = useState(false);
  const [animandoModal5,setAnimandoModal5] = useState(true);
  const [modal6,setModal6] = useState(false);
  const [animandoModal6,setAnimandoModal6] = useState(false);
  const [modal7,setModal7] = useState(false);
  const [animandoModal7,setAnimandoModal7] = useState(false);
  const [position, setPosition] = useState(null);
  const [view,setView] = useState({tipo:"Domicilio",cod:"D",descp:"¿Que desea pedir hoy?"});
  const [abrirformulario,setAbrirformlario] = useState(true);
  const [latitud,setLatitud] = useState(null);
  const [longitud,setLongitud] = useState(null);
  const [get,setGet] = useState({
    ciudad:"",
    colonias:"",
    Direccion:"",
    Referencia: ""
  }) 
  const direccionGet = (e)=>{
    setGet(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const [getdireccion,setGetdireccion] = useState({
    ciudad:"",
    colonia:"",
    referencia:"",
    direccion:"",
    Latitude:"",
    Longitud:""
  });
  const [arreglobotones,setArreglobotones] = useState([{id:1,name:"Promociones"},{id:2,name:"Lo nuevo"},
                                                       {id:3,name:"Personalizado"},{id:4,name:"Especiales"},{id:5,name:"Todos"}]);
  const [estadodonnas,setEstadodonnas] = useState({id:1,name:"Promociones"});
  const [arreglobotones2,setArreglobotones2] = useState([{id:1,name:"Grande"},{id:2,name:"Mediano"},{id:3,name:"Todos"}]);
  const [estadoDW,setEstadoDW] = useState({id:1,name:"Grande"})
  const [getRecoger,setGetRecoger] = useState({
    fecharecoger:"",
    horarecoger: ""});
  const [getencargar,setGetencargar] = useState({
    nombre:"",
    dir:"",
    hora:""});

  const obtenerRecoger = (e)=>{
    setGetRecoger({
      ...getRecoger,
      [e.target.name]: e.target.value
    })};

  const obtenerEncargar = (e)=>{
    setGetencargar({
      ...getencargar,
      [e.target.name]: e.target.value
    })};
  const [datosform1,setDatosForm1] = useState({
    N:"",
    L:"",
    J:"",
    CN:"",
    CB:""
  });
  const [datosform2,setDatosForm2] = useState({
    FM:"",
    LB:"",
    Cc:"",
    CC:""
  });
  const [datosform3,setDatosform3] = useState({
    MP:"",
    MM:"",
    G:"",
    GO:"",
    CCO:"",
    FT:"",
    Kt:"",
    S:"",
    AP:""
  });
  const [datosform4,setDatosform4] = useState({
    Aven:"",
    JL:"",
    P:"",
    G1:"",
    P1:""
  });
  const [datosform5,setDatosform5] = useState({
    RE:"",
    FE:"",
    M2:"",
    D:""
  })
  const [datosform6,setDatosform6] = useState({
    ReEx: "",
    FruEx:"",
    MoreEx:"",
    Dedicatoria:""
  })

  const obtenerForm1 = (e)=>{
    if(e.target.checked){
      setDatosForm1({
        ...datosform1,
        [e.target.name]: e.target.value});
    }
    else{
      setDatosForm1({
        ...datosform1,
        [e.target.name]:""});
    } 
  };

  const obtenerForm2 = (e)=>{
    if(e.target.checked){
      setDatosForm2({
        ...datosform2,
        [e.target.name]: e.target.value})
    }
    else{
      setDatosForm2({
        ...datosform2,
        [e.target.name]:""})
    }
  };

  const obtenerForm3 = (e)=>{
    if(e.target.checked){
      setDatosform3({
        ...datosform3,
        [e.target.name]: e.target.value
      })
    }
    else{
      setDatosform3({
        ...datosform3,
        [e.target.name]: ""
      })
    }
  
  };

  const obtenerForm4 = (e)=>{
    if(e.target.checked){
      setDatosform4({
        ...datosform4,
        [e.target.name]: e.target.value
      })
    }
    else{
      setDatosform4({
        ...datosform4,
        [e.target.name]: ""
      })
    }
  };

  const obtenerForm5 = (e)=>{
    if(e.target.checked){
      setDatosform5({
        ...datosform5,
        [e.target.name]: e.target.value
      })
    }
    else{
      setDatosform5({
        ...datosform5,
        [e.target.name]: ""
      })
    }
  };
  const obtenerform6 = (e)=>{
    if(e.target.checked){
      setDatosform6({
        ...datosform6,
        [e.target.name]: e.target.value
      })
    }
    else{
      setDatosform6({
        ...datosform6,
        [e.target.name]: ""
      })
    }
  };
  const [abrirvista,setAbrirvista] = useState(false);
  const openabrirvista = ()=>{
    setAbrirvista(!abrirvista);
  }
  const [abrircarrito,setaAbrirCarrito] = useState(true);
  const openelemento1 = ()=>{
    setaAbrirCarrito(true);
  }
  const openelemento2 = ()=>{
    setaAbrirCarrito(false);
  }
  const [openeditarconfig,setOpeneditarconfig] = useState(false);
  const [opendireccionconfig,setOpendireccionconfig] = useState(false);
  const [opentargetasconfig,setOpentargetaconfig] = useState(false);
  const [opencuentasconfig,setOpencuentasconfig] = useState(false);
  const [animareditar,setAnimareditar] = useState(false);
  const [animardireccion,setAnimardireccion] = useState(false);
  const [animartargeta,setAnimartargeta] = useState(false);
  const [animardeposto,setAnimardeposto] = useState(false);
  const openconfig1 = ()=>{
    setOpeneditarconfig(true);
      setTimeout(()=>{
        setAnimareditar(true);
    },1000)
  };
  const openconfig2 = ()=>{
    setOpendireccionconfig(true);
      setTimeout(()=>{
        setAnimardireccion(true);
    },1000)
  };
  const openconfig3 = ()=>{
    setOpentargetaconfig(true);
    setTimeout(()=>{
      setAnimartargeta(true);
  },1000)
  }
  const openconfig4 = ()=>{
    setOpencuentasconfig(true);
    setTimeout(()=>{
      setAnimardeposto(true);
  },1000)
  };
  const closeconfig1 =  ()=>{
    setOpeneditarconfig(false);
      setTimeout(()=>{
        setAnimareditar(false);
    },1000)
  };
  const closeconfig2 =  ()=>{
    setOpendireccionconfig(false);
      setTimeout(()=>{
        setAnimardireccion(false);
    },1000)
  };
  const closeconfig3 = ()=>{
    setOpentargetaconfig(false);
    setTimeout(()=>{
      setAnimartargeta(false);
  },1000)
  };
  const closeconfig4 = ()=>{
    setOpencuentasconfig(false);
    setTimeout(()=>{
      setAnimardeposto(false);
  },1000)
  };
  const [formeditar,setFormeditar] = useState({
    textoNombreEditar: "",
    textoTelefonoEditar:""
  })
  const obtenerformEditar = (e)=>{
    setFormeditar({
      ...formeditar,
      [e.target.name]: e.target.value})
  };

  const [state, setState] = useState({
    number: '',
    name: '',
    cvc: '',
    expiry: '',
    focus: ''})

    const obtenerformtargeta = (e)=>{
      setState({
        ...state,
        [e.target.name]: e.target.value})
    };

    const handlefocusChange = (e)=>{
      setState({
        ...state,
       focus: e.target.name})
    }
    const [estadoEditarTargetas,setEstadoEditarTargetas] = useState({id:"",
                                                                     Numero:"",
                                                                     Nombre:"",
                                                                     Vencimiento:"",
                                                                     CVC:"",
                                                                     idusuario:"",
                                                                     focus:""
                                                                     });
    const ObtenerestadoEditarTargetas = (e)=>{
      setEstadoEditarTargetas({
        ...estadoEditarTargetas,
        [e.target.name]: e.target.value
      })
    };
    const FocusestadoEditarTargetas = (e)=>{
      setEstadoEditarTargetas({
        ...estadoEditarTargetas,
       focus: e.target.name})
    };
    const [ObjectPayment,setObjectPayment] = useState({id:"",
                                                       N_cuenta:"",
                                                       Nombre:"",
                                                       Imagen:""});

    const [TargetaUtilizar,setTargetaUtilizar] = useState({id:"",
                                                           Numero:"",
                                                           Nombre:"",
                                                           Vencimiento:"",
                                                           CVC:"",
                                                           idusuario:""});
    const [numero,setNumero] = useState(1);
    const [IntroEnvio,setIntroEnvio] = useState(true);
    const [valuePedido,setValuePedido] = useState({
      nombre:"",
      precio:"",
      descp:"",
      imagen:"",
      promo:"",
      N:"",
      L:"",
      J:"",
      CN:"",
      CB:"",
      FM:"",
      LB:"",
      Cc:"",
      CC:"",
      MM:"",
      G:"",
      GO:"",
      CCO:"",
      FT:"",
      Kt:"",
      AP:"",
      Aven:"",
      JL:"",
      P1:"",
      Cantidad:"",
      G1:"",
      MP:"",
      S:"",
      ReEx:"",
      FruEx:"",
      MoreEx:"",
      Dedicatoria:"",
      fecha:"",
      Tipoproducto:"",
      TipoProducto:""
    });
   return (
    <Stade.Provider value={{
        openspinnerloading,
        setOpenspinnerloading,
        openslider,
        setOpenslider,
        modal,
        setModal,
        animandoModal,
        setAnimandoModal,
        abrirRegistror, 
        setAbrirRegistro,
        abrir,setAbrir,
        animandoModal2,setAnimandoModal2,
        modal2,setModal2,
        show,setShow,
        animandoModal3,setAnimandoModal3,
        datos,setDatos,
        logic,setLogic,
        error,setError,
        token,setToken,
        obtenerDatos,
        modal3,setModal3,
        animandoModal4,setAnimandoModal4,
        modal5,setModal5,
        animandoModal5,setAnimandoModal5,
        modal6,setModal6,
        animandoModal6,setAnimandoModal6,
        position, setPosition,
        view,setView,
        abrirformulario,setAbrirformlario,
        latitud,setLatitud,
        longitud,setLongitud,
        get,direccionGet,
        getdireccion,setGetdireccion,
        arreglobotones,setArreglobotones,
        estadodonnas,setEstadodonnas,
        animandoModal7,setAnimandoModal7,
        modal7,setModal7,
        arreglobotones2,setArreglobotones2,
        estadoDW,setEstadoDW,
        getencargar,getRecoger,obtenerRecoger,obtenerEncargar,
        datosform1,datosform2,datosform3,datosform4,obtenerForm1,obtenerForm2,obtenerForm3,obtenerForm4,
        datosform5,obtenerForm5,obtenerform6,datosform6,
        abrirvista,openabrirvista,
        abrircarrito,openelemento1,openelemento2,
        openeditarconfig,opendireccionconfig,opentargetasconfig,opencuentasconfig,
        animareditar,animardireccion,animartargeta,animardeposto,obtenerformEditar,formeditar,
        openconfig1,openconfig2,openconfig3,openconfig4,
        closeconfig1,closeconfig2,closeconfig3,closeconfig4,state,obtenerformtargeta,handlefocusChange,
        estadoEditarTargetas,setEstadoEditarTargetas,ObtenerestadoEditarTargetas,FocusestadoEditarTargetas,
        ObjectPayment,setObjectPayment,TargetaUtilizar,setTargetaUtilizar,numero,setNumero,
        IntroEnvio,setIntroEnvio,valuePedido,setValuePedido
    }}> 
      {children} 
    </Stade.Provider>
  )}
export default Global; 
