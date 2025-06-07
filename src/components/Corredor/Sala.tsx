
type SalaProps ={

    numero:number,
    internet:boolean
}

export default function Sala({numero, internet}:SalaProps) {
  return (
    <li className={internet ? "sala online " : "sala ofline "}>Numero da sala: {numero} <br/> Ativo: {internet?"Sim":"Não"} </li>
  );
}
