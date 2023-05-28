import './App.css';
import Ingatlan from './Ingatlan';
import { useEffect, useState } from 'react';
import UserService from './UserService';

function App() {

const [kategoria, setKategoria] = useState(0);
const [leiras, setLeiras] = useState("");
const [kategoriak, setKategoriak] = useState([])
let date = new Date().toLocaleString();
  let time = (date).toString()
  time = time.split(",");
  let elso = time[0]
  elso = elso.split("/") 
  if(elso[0].length <= 1){
    elso[0] = `0${elso[0]}`
  }
  if(elso[1].length <= 1){
    elso[1] = `0${elso[1]}`
  }
  let newDate = `${elso[2]}-${elso[0]}-${elso[1]}`
  
const [hirdetesDatuma, sethirdetesDatuma] = useState(newDate);
const [tehermentes, setTehermentes] = useState(0);
const [ar, setAr] = useState(0);
const [kepURL, setKepURL] = useState("");
const [ingatlanok, setIngatlanok] = useState([]);
const [ujHirdetes, setUjHirdetes] = useState({kategoria: kategoria, leiras: leiras, hirdetesDatuma: hirdetesDatuma, tehermentes: tehermentes, ar: ar, kepURL: kepURL});



useEffect(() => {
  UserService.getData("ingatlanokKategoriaval").then((data) => {
    setIngatlanok(data);
  });
  UserService.getData("kategoriak").then((data) => {
    setKategoriak(data);
  });
}, [ingatlanok]);

function dataChange(event) {
  ujHirdetes[event.target.id] = event.target.value;
  setKategoria(ujHirdetes.kategoria)
  setLeiras(ujHirdetes.leiras)
  sethirdetesDatuma(ujHirdetes.hirdetesDatuma);
  if(event.target.id == "tehermentes"){
    if(event.target.checked == true){
      ujHirdetes.tehermentes = 1;
      setTehermentes(1)
    }else{
      ujHirdetes.tehermentes = 0;
      setTehermentes(0)
    }
  }
  setAr(ujHirdetes.ar)
  setKepURL(ujHirdetes.kepURL)
    
  setUjHirdetes(ujHirdetes);
}


function kuld(){
  let data = {kategoria: parseInt(kategoria), leiras: leiras, hirdetesDatuma: hirdetesDatuma, tehermentes: tehermentes, ar: parseInt(ar), kepURL: kepURL}
  UserService.postData("ingatlanok", data)
}

  return (
    <div className="App">
      <h1>Ajánlataink</h1>
      <div className="table-responsive">
        <table className="table">
          <thead className="table-thead">
            <tr>
              <th scope="col">Kategória</th>
              <th scope="col">Leírás</th>
              <th scope="col">Hirdetés dátuma</th>
              <th scope="col">Tehermentes</th>
              <th scope="col">Fénykép</th>
              <th scope="col">törlés</th>
            </tr>
          </thead>
          <tbody>
            {ingatlanok.map((ingatlan, index) => {
              return (
                <Ingatlan
                ingatlan={ingatlan}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="uj">

      <div className="col-xs-12" >
        <label htmlFor="leiras"  className="form-label">
          Ingatlan kategóriája
        </label>
        </div>
        <div className="col-xs-12 d-flex justify-content-center" >
      <select className="form-select" id="kategoria" onChange={dataChange} style={{width: "20rem", maxWidth: "100%"}}>
          <option defaultValue={""}>Kérem válasszon</option>
          {kategoriak.map((kat, i) => {
            let kategoria = kat.id;
            return (
              <option value={kategoria} key={i}>
                {kat.nev}
              </option>
            );
          })}
        </select>
        </div>

        <div className="col-xs-12">
        <label htmlFor="hirdetesDatuma" className="form-label">
          Hirdetés dátuma
        </label>
        </div>
        <div className="col-xs-12 d-flex justify-content-center" >
        <input type="date" id="hirdetesDatuma" name="trip-start"
       min="2016-01-01" max="2024-12-31" onChange={dataChange} style={{width: "20rem", maxWidth: "100%"}} format="MM-DD-YYYY" value={hirdetesDatuma}></input>
      </div>

      <div className="col-xs-12">
        <label htmlFor="leiras" className="form-label" >
          Ingatlan leírása
        </label>
        
        </div>
        <div className="col-xs-12 d-flex justify-content-center" >
        <input
          type="text"
          className="form-control"
          id="leiras"
          defaultValue={ujHirdetes.leiras}
          onChange={dataChange}
          value={leiras}
          style={{width: "20rem", maxWidth: "100%"}}
        />
      </div>

      <div className="col-xs-12">
      <input type="checkbox" id="tehermentes" name="tehermentes" onChange={dataChange} ></input>
<label htmlFor="tehermentes">Tehermentes ingatlan</label>
</div>

<div className="col-xs-12">
        <label htmlFor="ar" className="form-label">
          Ár megadása
        </label>
        </div>
        <div className="col-xs-12 d-flex justify-content-center" >
        <input
          type="number"
          min="1"
          max="30000000"
          className="form-control"
          id="ar"
          value={ar}
          onChange={dataChange}
          style={{width: "20rem", maxWidth: "100%"}}
        />
      </div>

      <div className="col-xs-12">
        <label htmlFor="kepURL" className="form-label">
          Fénykép az ingatlanról
        </label>
        </div>
        <div className="col-xs-12 d-flex justify-content-center" >
        <input
          type="text"
          className="form-control"
          id="kepURL"
          onChange={dataChange}
          style={{width: "20rem", maxWidth: "100%"}}
          value={kepURL}
        />
      </div>

      <div className="col-xs-12">
        <button type="button" style={{width: "5rem", maxWidth: "100%"}} className="btn btn-primary" onClick={kuld}>
        Küldés
      </button>
      </div>
      </div>
    </div>
  );
}

export default App;
