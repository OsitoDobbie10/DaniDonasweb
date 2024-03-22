import React from 'react'
import "./DatosCheescake.css"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const DatosCheescake = ({titulo,datos,tipo}) => {
  const NavegadorCheescake = useNavigate();
  return (
    <div className="menuchess">
     <h2 className='Titlechess'>{titulo}</h2>
     <section className='Arreglochees'>
     {
      datos.map((item)=>{
        return <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               onClick={()=>NavegadorCheescake(`/WD/${item.id}/pedido`)}
               className='itemchees'
              key={item.id}
              >
              <div className="contenedorimagendonnas">
              <img src={item.imagenes} alt={item.url} className='imagendo'/>
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

export default DatosCheescake
