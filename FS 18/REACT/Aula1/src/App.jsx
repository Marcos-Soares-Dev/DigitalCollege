import Externo from "./Externo";

const BoasVindas = ({ name }) => {
  return ( 
    <h1>Seja bem vindo, {name}</h1>
   );
}
 



const App = () => {
  return ( 
    <>
    <BoasVindas name={"Edi"}/>
    <Externo /> 
    </>   
   );
}
 
export default App;