

export default function Thermometer(props) {
    return(
        <div className="h-full w-10 bg-red-500 flex flex-row justify-center items-end">
            <div className={`h-${props.mood} w-5 bg-black`}></div>
        </div>
    )
}