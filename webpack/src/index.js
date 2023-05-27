import{setItem} from "./utils/storage";
import "./index.scss";
import "bootstrap";

document.getElementById("btnSayHello").addEventListener("click",()=>{
    alert("Hi, study hard!");

    setItem("token","34762001-22S423-3423-222-190733498-23");
})


