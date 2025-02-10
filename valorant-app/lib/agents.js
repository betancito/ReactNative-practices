export async function getAgents() {
  const AGENTS = "https://valorant-api.com/v1/agents";

  const rawData = await fetch({ AGENTS });
  const json = await rawData.json();

  const {
    data: { items },
  } = json;

  return items.map((item) => {
    const { description, displayName, releaseDate, uuid } = item;

    // Create image variable based on path
    const img = `https://media.valorant-api.com/agents/${uuid}/displayicon.png`;

    return {
      description,
      releaseDate,
      displayName,
      uuid,
      img: img,
    };
  });
}