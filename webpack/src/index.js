import{setItem} from "./utils/storage";
import "./index.scss";

document.getElementById("btnSayHello").addEventListener("click",()=>{
    alert("Hi, study hard!");
    
    const arr = [123,56,893,23,65,87,3];
    console.log(getArray([...arr]));

    setItem("token","34762001-22S423-3423-222-190733498-23");
})

const getArray = (arr)=> {
    return arr.filter( (x)=>x>100).reduce( (t,x)=> t+x, 0);
}
