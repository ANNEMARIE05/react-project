import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { isUtf8 } from "node:buffer";
const server = http.createServer(((req, res)=>{
    console.log("voir nos requettes",req.url, req.method, req.headers);
    res.setHeader("Access-Control-Allow-Origin", "*")

    if(req.url == "/api/auth/register" && req.method == "POST"){
        console.log('yes')

        let body = ""
        req.on("data", (chenck)=>{
            console.log(chenck)
            body += chenck
        })
        req.on("end", ()=>{
            body = JSON.parse(body)
            console.log(body);
            
            let olData = fs.readFileSync(path.join(__dirname,"api", "data", "user.json"), {"encoding" : "Utf8"})
            olData = JSON.parse(olData)
            olData.push(body)
            fs.writeFileSync(api/data/user.json, JSON.stringify(olData),{"encoding" : "utf-8"} )
            console.log(olData);

        })
        res.end("ok")
    }
    if(req.url == "api/auth/login" && req.method == "POST"){
        let body = ""
        req.on("data",(chenck)=>{
            console.log(chenck);
            body+= chenck
        })
        req.on("end", ()=>{
            body = JSON.parse(body)
            console.log("jygjukshlh", body);

            let olData = fs.readFileSync(path.join("api","Data","user.json"),{"encoding":"utf-8"})
            olData = JSON.parse(olData)

            let redirec = olData.find((even)=>even.email && even.motdepasse == body.motdepasse)
            if(redirec){
                return res.end(redirec.email)
            }else{
                return res.end("error")
            }
        })
    }
   
    
}))

server.listen(4000, (e)=>{
    console.log("Server démarrer avec succes !!!")
})