import { useContext } from 'react';
import { Stade } from './Global';
const UseGlobal = () => {
    const UseContext = useContext(Stade)
  return UseContext;
}

export default UseGlobal;
