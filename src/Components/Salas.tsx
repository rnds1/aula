

type props = {
  id: number,
  sala: string,
  internet: boolean,
};

const Salas = ({itens}: {itens:props}) => {
  return (
   
        <li className={itens.internet? "sala online" : "sala offline"} >
            
            { "Sala:"+itens.sala}
          
            
        </li>
      

  );
};

export default Salas;
