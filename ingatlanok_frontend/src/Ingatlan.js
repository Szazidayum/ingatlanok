import { useEffect, useState } from "react";
import UserService from "./UserService";
import './App.css';
import Alert from "./Alert";

function Ingatlan(props){

    const [valasz, setValasz] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")
    
    function deleteIngatlan(){
        UserService.deleteData(`ingatlanok/${props.ingatlan.id}`)
    }

    function erdekel(){
        setMessage("Ingatlan információi")
    }

    
        useEffect(() => {
            if(props.ingatlan.tehermentes == 0){
                setValasz("Nem")
            }else{
                setValasz("Igen")
            }

            let datum = props.ingatlan.hirdetesDatuma
            let atmeneti = datum.split('-');
            let newDate = `${atmeneti[0]}.${atmeneti[1]}.${atmeneti[2]}`
            setDate(newDate)
            
            
          }, []);


    return(
        <>
        {message.length > 1 ? (
        <div className="alert alert-primary" role="alert">
          <p>{message}</p>
          <p>Kategória: {props.ingatlan.kategoria}</p>
          <p>Leírás: {props.ingatlan.leiras}</p>
          <p>Hirdetés dátuma: {date}</p>
          <p>Tehermentes: {valasz}</p>
          <p>Kép: <img 
      src={props.ingatlan.kepURL}
      alt="new" style={{width:"200px", height:"200px"}}
      /></p>
        </div>
      ) : (
        <div></div>
      )}
        
        <div className="row ingatlanDiv" >
      <div className="col kat"><p>{props.ingatlan.kategoria}</p></div>
      <div className="col leiras"><p>{props.ingatlan.leiras}</p></div>
      <div className="col date"><p>{date}</p></div>
      <div className="col teher"><p style={{color: "green"}}>{valasz}</p></div>
      <div className="col kep"><img 
      src={props.ingatlan.kepURL}
      alt="new" style={{width:"200px", height:"200px"}}
      /></div>
      <div scope="col align-middle" className="col delet" ><a className="text-danger pe-auto" onClick={deleteIngatlan}>
            <button className="btn btn-primary">delete</button>
          </a></div>
          <div scope="col align-middle" className="col erdekel" ><a className="text-danger pe-auto" onClick={erdekel}>
            <button className="btn btn-primary">Érdekel</button>
          </a></div>
          </div>
    </>
    )
}

export default Ingatlan;