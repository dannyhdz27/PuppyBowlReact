const puppyApi =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players";

export default async function fetchDogs() {
  try {
    const response = await fetch(puppyApi);
    const dogList = await response.json();
    return dogList.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`${puppyApi}/${id}`);
    const singleDog = response.json();
    return singleDog;
  } catch (error) {
    console.error(error);
  }
}

export async function postPup(name, breed) {
  try {
    const response = await fetch(puppyApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const postPup = response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deletePup() {
  //   fetch(puppyApi, {
  //     method: "DELETE",
  //   });
  try {
    const response = await fetch(puppyApi + "/" + id, {
      method: "DELETE",
    });
    // const deletePup = response.json();
  } catch (error) {
    console.error(error);
  }
}
