export default function AddEntry() {
    return (
    <div>
        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base'>What made you smile today?</label>
        <input className ='bg-skin-input shadow-md'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base'>What did you find challenging today?</label>
        <input className ='bg-skin-input shadow-md'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base'>If your mood was a type of weather, what would it be? Sunny, cloudy, stormy or something else?</label>
        <input className ='bg-skin-input shadow-md'></input>
        </div>

        <div className = 'flex justify-center'>
        <button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">Post!</button>
    </div>
    </div>
    );
}