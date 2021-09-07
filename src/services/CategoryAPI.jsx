export const fetchCategory = async () => {
    const response = await fetch("https://swapi.dev/api/");

    console.log("this is response:", response);
    if (!response.ok) {
      throw new Error("Something went wrong with the request.");
    }

    return response.json();
  };

  //eslint-disable-next-line
  export default {
    fetchCategory,
  };
