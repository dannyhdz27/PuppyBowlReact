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
          <li>Name: {dog.data.player.name}</li>
          <li>Breed: {dog.data.player.breed}</li>
        </ul>
      )}
      <p>This form will show a Single player</p>
    </div>
  );
};

export default SinglePlayer;
