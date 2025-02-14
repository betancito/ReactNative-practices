import displayIcon from "react-native";

export async function getAgents() {
  const AGENTS = "https://valorant-api.com/v1/agents";

  try{
    const rawData = await fetch(AGENTS);
    const json = await rawData.json();

    const {data} = json;

    return data.map((item) => {
      const { description, displayName, releaseDate, uuid } = item;

      // Create image variable based on path
      const img = item.displayIcon;

      return {
        description,
        releaseDate,
        displayName,
        uuid,
        img: img,
      };
    });
  }catch(error){
    console.log("Error fetching agents:", error)
  }
}