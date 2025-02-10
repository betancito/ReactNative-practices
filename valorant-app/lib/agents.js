export async function getAgents() {
    const AGENTS = "https://valorant-api.com/v1/agents";
  
    const rawData = await fetch({AGENTS});
    const json = await rawData.json();
  
    const {
      data: { items },
    } = json;
  
    return items.map((item) => {
      const { description, displayName, releaseDate, displayIcon } = item;
  
      // crea la imagen
      const { path } = displayIcon;
      const img = path;
  
      return {
        description,
        releaseDate,
        displayName,
        displayIcon: img,
      };
    });
  }
  
  export async function getAgentAbilities(slug) {
    const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;
  
    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();
  
    const { components } = json;
    const { title, description, criticScoreSummary, images } = components[0];
    const { score } = criticScoreSummary;
  
    // get the card image
    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;
  
    const rawReviews = components[3].data.items;
  
    // get the reviews
    const reviews = rawReviews.map((review) => {
      const { quote, score, date, publicationName, author } = review;
      return { quote, score, date, publicationName, author };
    });
  
    return {
      img,
      title,
      slug,
      description,
      score,
      reviews,
    };
  }