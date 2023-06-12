/* 
plan
make the header:
    - logo
    - avatar
    - circular div
*/ 




import logo from "../Img/logo-close.png"
import avatar from "../Img/number7V3.png"


export default function Header() {
    return(
        <header className="flex justify-between">
        <img src= {logo} alt="logo" className="h-28 w-44"/>
        <div className="h-24 w-24 bg-skin-secondary flex justify-center items-center rounded-full">

       
            <img src={avatar} alt="avatar" className= "h-22 w-24"/>
        </div>
        </header> 
    )
}