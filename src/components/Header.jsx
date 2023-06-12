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
        <header className="flex justify-between mt-10 bg-skin-primary h-36 items-center bg-current">
        <div className="ml-7">
        <img src= {logo} alt="logo" className="h-22 w-40"/>
        </div>
        <div className="h-24 w-24 bg-skin-secondary flex justify-center items-center rounded-full m-10">
            <img src={avatar} alt="avatar" className= "h-22 w-24"/>
        </div>
        </header> 
    )
}