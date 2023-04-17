import react from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleDog } from "../puppies";

const SinglePlayer = () => {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    async function getDog() {
      const dogFromApi = await fetchSingleDog(dogId);
      setDog(dogFromApi);
    }
    getDog();
  }, []);
  console.log("Dog", dog);
  return (
    <div>
      {dog && (
        <ul>
          <li>ID: {dog.data.player.id}</li>
          <li>Name: {dog.data.player.name}</li>
          <li>Breed: {dog.data.player.breed}</li>
        </ul>
      )}
    </div>
  );
};

export default SinglePlayer;
