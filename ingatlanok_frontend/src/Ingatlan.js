import { useEffect, useState } from "react";
import UserService from "./UserService";

function Ingatlan(props){

    const [valasz, setValasz] = useState("")
    const [date, setDate] = useState("")
    
    function deleteIngatlan(){
        UserService.deleteData(`ingatlanok/${props.ingatlan.id}`)
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
        <tr>
      <td className="align-middle">{props.ingatlan.kategoria}</td>
      <td className="align-middle">{props.ingatlan.leiras}</td>
      <td className="align-middle">{date}</td>
      <td className="align-middle"><p style={{color: "green"}}>{valasz}</p></td>
      <td className="align-middle"><img 
      src={props.ingatlan.kepURL}
      alt="new" style={{width:"200px", height:"200px"}}
      /></td>
      <td className="align-middle"><a className="text-danger pe-auto" onClick={deleteIngatlan}>
            <button>delete</button>
          </a></td>
    </tr>
    </>
    )
}

export default Ingatlan;