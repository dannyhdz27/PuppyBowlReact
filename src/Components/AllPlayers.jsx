import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchDogs from "../puppies";
import { useNavigate } from "react-router-dom";
import { deletePup } from "../puppies";

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
      <div className="allPups">
        {dogs.map((dog) => {
          return (
            <div className="puppyCard">
              <img src={dog.imageUrl} />
              <div className="textInfo">
                <p>{dog.name}</p>

                <button
                  key={dog.id}
                  onClick={() => {
                    navigate(`/${dog.id}`);
                  }}
                >
                  See Details
                </button>
                <button
                  onClick={async (e) => {
                    const deleteDog = await deletePup();
                  }}
                >
                  Delete From Roster
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPlayers;
