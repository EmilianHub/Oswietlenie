import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Axios from 'axios'




export default function Form() {
    Axios.defaults.withCredentials = true;
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [Name, setName] = useState("")
    const Import = () =>{
        Axios.post('http://localhost:5000/Zamowienie', {Firstname: firstName, Lastname: lastName, Name: Name})
            .then((response) => console.log(response))
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Wprowadź dane do faktury </div> <br/>
            <div className="form-row">
                <label>Imię</label>
                <input {...register("firstName")} onChange={(e) =>
                {setFirstName(e.target.value);} }/><br/>
            </div>
            <div className="form-row">
                <label> Nazwisko</label>
            <input {...register("lastName")} onChange={(e)=>{setlastName(e.target.value)}} /><br/>
            </div>
            <div className="form-row">
                <label>Nazwa firmy</label>
                <input {...register("Name")} onChange={(e)=>{setName(e.target.value)}} /><br/>
            </div>
            <div className="form-row">
                <label>NIP</label>
                <input {...register("Nip")} /><br/>

            </div>
            <div className="form-now">
            <label>Adres</label>
                <textarea {...register("adress")}> </textarea>

            </div>
            <div className="form-row">
            <label htmlFor="email">Email</label>
            <input {...register("email")} />
        </div>
        <label>Wybierz produkt</label>
            <select {...register("Produkt")}>
                <option value="pb98">PB98</option>
                <option value="pb95">PB95</option>
                <option value="on">ON</option>
                <option value="lpg">LPG </option>
            </select><br/>
            <div className="form-now">
                <label>Podaj ilość </label>
                <input {...register("ilosc")}/>m<sup>3</sup> <br/>
                <label>Sposób płatności</label>
                <select{...register("platnosc")}>
                    <option value="gotowka">Gotówka</option>
                    <option value="przelew">Przelew</option>
                </select>
            </div><br/>
            <input onClick={Import} type="submit" value={"Złóż zamówienie"} />
        </form>
    );
};