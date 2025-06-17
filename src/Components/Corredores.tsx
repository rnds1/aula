import Salas from "./Salas";


type Dado = {
  id: number,
  sala: string,
  internet: boolean,
};



const Corredores = ({sala}:{sala:Dado[]}) => {
  return (
      <>
        <ul className="coluna A">
          Corredor A
          {sala.map((element) => element.sala.includes("A")? <Salas itens={element} />  :null)}
        </ul>
        <ul className="coluna B">
          Corredor B         
          {sala.map((element) => element.sala.includes("B")? <Salas itens={element} />  :null)}
        </ul>
        <ul className="coluna C">
          Corredor C
          {sala.map((element) => element.sala.includes("C")? <Salas itens={element} />  :null)}         
         
        </ul>
        <ul className="coluna D"> 
          Corredor D
          {sala.map((element) => element.sala.includes("D")? <Salas itens={element} />  :null)}
         
        </ul>
        <ul className="coluna E"> 
          Corredor E
         {sala.map((element) => element.sala.includes("E")? <Salas itens={element} />  :null)}
        </ul>
        <ul className="coluna F"> 
          Corredor F
         {sala.map((element) => element.sala.includes("F")? <Salas itens={element} />  :null)}
        </ul>
        </>

  );
};

export default Corredores;
