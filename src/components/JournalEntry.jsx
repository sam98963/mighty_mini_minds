import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faShare } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JournalEntry(props) {
  const [isEditing, setIsEditing] = useState(true); // isEditing is a boolean that will be used to determine if the user is editing the post or not
  const [editEntry, setEditEntry] = useState({
    res1: props.res1,
    res2: props.res2,
    res3: props.res3,
    share: props.share,
  }); // editEntry is an object that will be used to store the user's input
  const [editId, setEditId] = useState(); // editId is a string that will be used to store the id of the post that the user is editing
  const queryClient = useQueryClient(); // queryClient is a variable that will be used to invalidate the cache
  const [shareMessageTrue, setShareMessageTrue] = useState(false); // shareMessageTrue is a boolean that will be used to determine if the share message is displayed or not
  const [message, setMessage] = useState(""); // message is a string that will be used to store the message that will be displayed to the user

  const deletePostMutation = useMutation({
    // deletePostMutation is a variable that will be used to delete a post
    mutationFn: async (id) => {
      // mutationFn is a function that will be used to delete a post
      const response = await axios.delete(
        `https://mighty-mini-minds-backend.onrender.com/entries/${id}`
      ); // response is a variable that will be used to store the response from the backend
      return response.data; // return the data from the response
    },
    onSuccess: () => {
      // onSuccess is a function that will be called when the mutation is successful
      queryClient.invalidateQueries("entries"); // invalidate the cache
    },
  });

  const [confirmDelete, setConfirmDelete] = useState(false); 

  function handleConfirmDelete() {
    setConfirmDelete(true);
  }

  const handleDeleteEntry = async (id) => {
    // handleDeleteEntry is a function that will be used to delete a post
    try {
      await deletePostMutation.mutateAsync(id); // delete the post using the deletePostMutation variable
    } catch (error) {
      console.error(error);
    }
    setConfirmDelete(false);
  };

  const editPostMutation = useMutation({
    // editPostMutation is a variable that will be used to edit a post
    mutationFn: async (entry) => {
      // mutationFn is a function that will be used to edit a post
      const response = await axios.patch(
        // response is a variable that will be used to store the response from the backend
        `https://mighty-mini-minds-backend.onrender.com/entries/${editId}`, // edit the post using the editId variable
        entry
      );
      return response.data; // return the data from the response
    },
    onSuccess: () => {
      queryClient.invalidateQueries("entries"); // invalidate the cache when the mutation is successful
    },
    onError: (error) => {
      console.error(error.message); // log the error message to the console
    },
  });

  const handleEdit = (id) => {
    // handleEdit is a function that will be used to edit a post
    setEditId(id); // set the editId variable to the id of the post that the user is editing
    setIsEditing(!isEditing); // toggle the isEditing variable to true
  };

  const handleInputChange = (event) => {
    // handleInputChange is a function that will be used to handle the user's input
    setEditEntry({ ...editEntry, [event.target.name]: event.target.value }); // set the editEntry variable to the user's input
  };

  const handleEditEntry = async () => {
    // handleEditEntry is a function that will be used to edit a post
    const entry = {
      // entry is an object that will be used to store the user's input
      answer_one: editEntry.res1,
      answer_two: editEntry.res2,
      answer_three: editEntry.res3,
      share: false,
    };
    try {
      await editPostMutation.mutateAsync(entry); // edit the post using the editPostMutation variable
      setIsEditing(!isEditing); // toggle the isEditing variable to false to stop the user from editing the post
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmail = async () => {
    // handleEmail is a function that will be used to send an email to the user's trusted person
    try {
      const response = await axios.post(
        `https://mighty-mini-minds-backend.onrender.com/sendemail/${editId}`
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  // this function will be used to share a post
  async function handleShare(id) {
    // handleShare is a function that will be used to share a post
    setEditId(id); // set the editId variable to the id of the post that the user is sharing
    const entry = {
      share: true, // set the share property of the entry object to true
    };
    try {
      await editPostMutation.mutateAsync(entry); // edit the post using the editPostMutation variable and the entry object
      handleEmail(); // call the handleEmail function
      setShareMessageTrue(true); // set the shareMessageTrue variable to true to display the share message
      setMessage(
        // set the message variable to the message that will be displayed to the user
        "Thanks for sharing your entry! It's on its way to your trusted person!"
      );
    } catch (error) {
      console.error(error);
    }
  }

  // this function will be used to display the share message to the user for 5 seconds and then hide it again
  function shareMessage() {
    setMessage("Would you like to share your thoughts with someone?");
    setShareMessageTrue(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShareMessageTrue(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [shareMessageTrue]);

  return (
    <>
      {" "}
      {isEditing ? (
        <>
          <h4 className="font-bold ml-5">{props.date}</h4>
          <div className="flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md">
            <h2 className="font-bold">{props.q1}</h2>
            <p className="break-words w-full" data-testid="journal-entry-1">
              {props.res1}
            </p>
            <br />
            <h2 className="font-bold">{props.q2}</h2>
            <p className="break-words w-full">{props.res2}</p>
            <br />
            <h2 className="font-bold">{props.q3}</h2>
            <p className="break-words w-full">{props.res3}</p>
            <div className="flex flex-row item-start justify-end w-full gap-5 mt-4 mb-2">
              {props.share === false ? (
                <button
                  aria-label="share-button"
                  onMouseOver={shareMessage}
                  onClick={() => handleShare(props.id)}
                  className="rounded-md w-10 h-10 bg-skin-secondary text-white transition-colors duration-300 ease-in-out transform hover:scale-125"
                >
                  <FontAwesomeIcon icon={faShare} />
                </button>
              ) : null}
              <button
                aria-label="edit-button"
                onClick={() => handleEdit(props.id)}
                className="rounded-md w-10 h-10 bg-skin-secondary text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 "
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>
              {confirmDelete === true ? (<button
                aria-label="delete-button"
                onClick={() => handleDeleteEntry(props.id)}
                className="text-xs rounded-md w-10 h-10 bg-skin-secondary mr-2 text-white transition-colors duration-300 ease-in-out transform hover:scale-125"
              >
               sure?
              </button>): <button
                aria-label="confirm-button"
                onClick={() => handleConfirmDelete()}
                className="rounded-md w-10 h-10 bg-skin-secondary mr-2 text-white transition-colors duration-300 ease-in-out transform hover:scale-125"
              >
                 <FontAwesomeIcon icon={faTrash} />
              </button> }
              {/* <button
                aria-label="delete-button"
                onClick={() => handleDeleteEntry(props.id)}
                className="rounded-md w-10 h-10 bg-skin-secondary mr-2 text-white transition-colors duration-300 ease-in-out transform hover:scale-125"
              >
                
              </button> */}
            </div>
            {shareMessageTrue ? <p>{message}</p> : null}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-start items-start bg-skin-input mx-4 mb-4 p-2 rounded-lg shadow-md">
          <h1 className="font-bold mb-4">Edit Your Journal</h1>
          <h2 className="font-bold">{props.q1}</h2>
          <textarea
            type="text"
            rows="4"
            className="border-2 border-skin-primary w-full rounded-md p-1"
            name="res1"
            value={editEntry.res1}
            onChange={handleInputChange}
          />
          <br />
          <h2 className="font-bold">{props.q2}</h2>
          <textarea
            type="text"
            rows="4"
            name="res2"
            className="border-2 border-skin-primary w-full rounded-md  p-1"
            value={editEntry.res2}
            onChange={handleInputChange}
          />
          <br />
          <h2 className="font-bold">{props.q3}</h2>
          <textarea
            type="text"
            rows="4"
            className="border-2 border-skin-primary w-full rounded-md p-1 mb-4"
            name="res3"
            value={editEntry.res3}
            onChange={handleInputChange}
          />
          <div className="flex flex-row item-start justify-end w-full gap-5 mt-2 mb-5">
            <button
              aria-label="cancel-edit-button"
              onClick={handleEdit}
              className="rounded-md w-10 h-10 bg-skin-secondary text-white transition-colors duration-300 ease-in-out transform hover:scale-125"
            >
              X
            </button>
            <button
              aria-label="cancel-edit-button"
              onClick={handleEditEntry}
              className="rounded-md w-10 h-10 bg-skin-secondary text-white mr-5 transition-colors duration-300 ease-in-out transform hover:scale-125"
            >
              ✓
            </button>
          </div>
        </div>
      )}
    </>
  );
}
