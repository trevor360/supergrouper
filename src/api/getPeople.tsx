export const getPeople = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error:", error.message);
      return [];
    }
  };
