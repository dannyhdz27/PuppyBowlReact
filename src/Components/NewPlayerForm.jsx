import react from "react";
import { useState } from "react";
import { postPup } from "../puppies";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <h2>Create New Pup</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newDog = await postPup(name, breed);
          console.log("new pup from api", newDog);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="breed">breed:</label>
        <input
          type="text"
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
