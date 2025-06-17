
import Corredores from "./Corredores";





type Dado = {
  id: number;
  sala: string;
  internet: boolean;
};
 const BlocoA = ({listaDeDados} : {listaDeDados :Dado[]}) => {

    const listaOnline :Dado[] = [];
    const listaOffline: Dado[] =[];

    listaDeDados.map((element:Dado) => element.internet? listaOnline.push(element) : listaOffline.push(element))
  return (  
        <>
        <div className="colunas on">
          <Corredores sala={listaOnline}/>
            
        </div>
        <div className="colunas of">
            <Corredores sala={listaOffline}/>
           
            
            
        </div>
        </>   
          
            
    
      

  );
};

export default BlocoA;
