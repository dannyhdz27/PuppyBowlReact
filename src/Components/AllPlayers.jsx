import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchDogs from "../puppies";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const dogList = await fetchDogs();
      setDogs(dogList);
      {
        console.log("dogList");
        console.log(dogList);
      }
    }
    getDogs();
  }, []);

  return (
    <div>
      <p>This form will show all players</p>
      <div className="allPups">
        {dogs.map((dog) => {
          return (
            <div className="puppyCard">
              <img src={dog.imageUrl} />
              <p
                key={dog.id}
                onClick={() => {
                  navigate(`/${dog.id}`);
                }}
              >
                {dog.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPlayers;
