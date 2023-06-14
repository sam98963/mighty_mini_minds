export default function AddEntry({questions}) {
    return (
    <div>
        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 px-8 mt-6'>{questions}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 p-8 mt-6'>{questions}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 px-8 mt-6'>{questions}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex justify-center'>
        <button className="text-white shadow-md text-2xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-1.5 px-3 m-6">Post!</button>
    </div>
    </div>
    );
}