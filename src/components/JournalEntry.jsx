import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function JournalEntry(props) {
    return (
    <>
        <h4 className="font-bold ml-5">{props.date}</h4>
        <div className = 'flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md'>
            <h2 className="font-bold">{props.q1}</h2>
            <p data-testid="journal-entry-1">{props.res1}</p>
            <br/>
            <h2 className="font-bold">{props.q2}</h2>
            <p>{props.res2}</p>
            <br/>
            <h2 className="font-bold">{props.q3}</h2>
            <p>{props.res3}</p>
            <div className='flex flex-row item-start justify-end w-full gap-5 mb-5'>
                <button className='rounded-md w-10 h-10 bg-skin-secondary text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 '><FontAwesomeIcon icon={faPencil} className='' /></button>
                <button className='rounded-md w-10 h-10 bg-skin-secondary text-white mr-5 transition-colors duration-300 ease-in-out transform hover:scale-125'><FontAwesomeIcon icon={faTrash} className='' /></button>
            </div>
        </div>
    </>
    );
}