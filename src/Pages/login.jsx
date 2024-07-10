import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


function Login(){
    function SubmitForm(e){
        const navigate = useNavigate
        e.preventDefault()
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data)
        let url = "http://localhost:4000/api/inscription"
        fetch(url,{
            method :"POST",
            body:JSON.stringify(data)
        })
        .then(res => res.text())                                                                        
        .then(resp=> {
            if(resp === "error"){
                alert("Error")
            }else{
                sessionStorage.setItem('sessionUser', JSON.stringify(resp))
                Navigate('/Quizz')
            }
        }).then(res =>res.text().then(response =>{
            if(response == error){

            }
            console.log("je suis la reponse", response);
        }))
    }


    return(
        <form
         onSubmit={SubmitForm}
         className="formulaire">
            <h2 className="titre"> CONNECTEZ-VOUS</h2>
            <div className="form">
            <div className="inpt1">
                <input type="email" placeholder=" Adresse email" />
            </div>
            <div className="inpt2">
                <input type="passeword" placeholder=" Mot de Passe"/>    
            </div> 
            </div>
            <button className="btnconnexion">Connexion</button>
        </form>
    )

    
}
export default Login