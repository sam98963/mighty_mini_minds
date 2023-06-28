import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';

export default function JournalEntry(props) {
// const response = await axios.delete(`https://mighty-mini-minds-backend.onrender.com/entries/${props.id}`);

    const queryClient = useQueryClient();
     
    const deletePostMutation = useMutation({
        mutationFn: async (id) => {
            console.log(id);
            const response = await axios.delete(`https://mighty-mini-minds-backend.onrender.com/entries/${id}`);
            return response.data;
        },
        onSuccess: () =>{
            queryClient.invalidateQueries('entries');
        } 
    }
    );

    const handleDeleteEntry = async (id) => {
        try {
            await deletePostMutation.mutateAsync(id);
        } catch (error) {
            console.error(error);
        }
      }
    

    return (
    <>
        <h4 className="font-bold ml-5">{props.date}</h4>
        <div className = 'flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md'>
            <h2 className="font-bold">{props.q1}</h2>
            <p>{props.res1}</p>
            <br/>
            <h2 className="font-bold">{props.q2}</h2>
            <p>{props.res2}</p>
            <br/>
            <h2 className="font-bold">{props.q3}</h2>
            <p>{props.res3}</p>
            <div className='flex flex-row item-start justify-end w-full gap-5 mb-5'>
                <button className='rounded-md w-10 h-10 bg-skin-secondary text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 '><FontAwesomeIcon icon={faPencil} className='' /></button>
                <button onClick={()=>handleDeleteEntry(props.id)} className='rounded-md w-10 h-10 bg-skin-secondary text-white mr-5 transition-colors duration-300 ease-in-out transform hover:scale-125'><FontAwesomeIcon icon={faTrash} className='' /></button>
            </div>
        </div>
    </>
    );
}
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useQuery, useMutation, queryCache } from '@tanstack/react-query';
// import axios from 'axios';

// export default function JournalEntry(props) {
//     const id = props.key;
//     const deleteEntry = async (id) => {
//         const response = await axios.delete(`https://mighty-mini-minds-backend.onrender.com/entries/${id}`);
//         return response.data;
//       };
//     const{error, mutate} = useMutation(deleteEntry)
    
//     const handleDelete = (id) => {
//         mutate(id, {
//           onSuccess: (data) => {
//             console.log(data); // { message: "Entry deleted successfully", deletedEntry }
//             // Invalidate the cache to trigger a re-fetch of data
//             queryCache.invalidateQueries('entries');
//           },
//           onError: (error) => {
//             // Handle error
//             console.error(error.response.data); // { message: "Error message from the server" }
//           },
//         });

//     return (
//     <>
//         <h4 className="font-bold ml-5">{props.date}</h4>
//         <div className = 'flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md'>
//             <h2 className="font-bold">{props.q1}</h2>
//             <p>{props.res1}</p>
//             <br/>
//             <h2 className="font-bold">{props.q2}</h2>
//             <p>{props.res2}</p>
//             <br/>
//             <h2 className="font-bold">{props.q3}</h2>
//             <p>{props.res3}</p>
//             <div className='flex flex-row item-start justify-end w-full gap-5 mb-5'>
//                 <button className='rounded-md w-10 h-10 bg-skin-secondary text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 '><FontAwesomeIcon icon={faPencil} className='' /></button>
//                 <button onClick={() => handleDelete(entryId)} className='rounded-md w-10 h-10 bg-skin-secondary text-white mr-5 transition-colors duration-300 ease-in-out transform hover:scale-125'><FontAwesomeIcon icon={faTrash} className='' /></button>
//             </div>
//         </div>
//     </>
//     );
// }}