import{setItem} from "./utils/storage";
import "./index.scss";
import "bootstrap";

document.getElementById("btnSayHello").addEventListener("click",()=>{
    alert("Hi, Webpack!");

    setItem("token","3476283-23423-3423-222-3233498-23");
})


