import type React from "react";
import Sala from "./Sala";

type CorredorProps = {
  titulo: string;
  salas: {
    numero: number;
    internet: boolean;
  }[];
};

const Corredor: React.FC<CorredorProps> = ({ titulo, salas }) => {
  return (
    <div className="corredor">
      <h1>{titulo}</h1>
      <ul className="salas">
        {salas.map((e) => (
            
          <Sala numero={e.numero} internet ={e.internet}/>
          
        ))}
      </ul>
    </div>
  );
};

export default Corredor;
