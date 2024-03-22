import "./DaniDonas.css"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const DatosDonna = ({titulo,datos,tipo}) => {
  const NavegarDatos = useNavigate();
  return (
    <div className="menudonnas">
     <h2 className='Titledonas'>{titulo}</h2>
     <section className='ArregloDonnas'>
     {
      datos.map((item)=>{
        return <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               onClick={()=>NavegarDatos(`/DD/${item.id}/pedido`)}
               className='itemdonnas'
              key={item.id}
              >
              <div className="contenedorimagendonnas" >
              <img src={item.imagen} alt={item.url} className='imagendo'/>
              </div>
              <div className="elementosdonnas">
              <div className="leftdonnas">
              <span className='sidonnas'>{item.nombre}</span>
              <span className='resumendonnas'>{item.descp}</span>
              <span className='pro'>{item.promo}</span>
              <span className='pedir'>{tipo}</span>
              </div>
              <div className="Rigthdoonas">
              Lps.{item.precio}.00
              </div>
              </div>
              </motion.div>
      })
    }
     </section>
    </div>
  )
}

export default DatosDonna;
