import {v,Array} from "../../index"
import styled from 'styled-components'
import {useLocation,useNavigate} from "react-router-dom"
import { Outlet } from "react-router-dom"
const NavbarMenu = () => {
const location = useLocation();
const navegarPages = useNavigate()
  return (
    <Container>
    {
        Array.map((item)=>{
            return <div className="elemento" key={item.id}>
                    <span 
                    onClick={()=>{navegarPages(`${item.COD}`)}}
                    className={`${location.pathname === item.COD ? 'logo' : 'logo2'}`}>{item.imagen}</span>
                    <span className={`${location.pathname === item.COD ? 'titulo1' : 'titulo2'}`}>{item.Descp}</span>
                   </div>
        })
    }
    </Container>
  )
}
<div>
<Outlet/>
</div>
const Container = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
.elemento{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.logo{
    font-size: 25px;
    font-weight: 900;
    color:red;
    &:hover{
        color:orange;
    }
}
.logo2{
    font-size: 25px;
    font-weight: 900;
    color:black;
    &:hover{
        color:orange;
    }
}
.titulo1{
    color: red;
    font-weight: 700;
}
.titulo2{
    color: black;

}
`;
export default NavbarMenu
