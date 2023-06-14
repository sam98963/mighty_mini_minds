export default function JournalEntry(props) {
    return (
    <>
        <h4 className="font-bold ml-5">{props.date}</h4>
        <div className = 'flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md'>
            <h2 className="font-bold">What did you enjoy today?</h2>
            <p>{props.res1}</p>
            <br/>
            <h2 className="font-bold">What did you find challenging today?</h2>
            <p>{props.res2}</p>
            <br/>
            <h2 className="font-bold">What surprised you today?</h2>
            <p>{props.res3}</p>
        </div>
    </>
    );
}