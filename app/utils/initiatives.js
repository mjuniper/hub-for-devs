export function getBannerImageUrl(assetsAry) {
  const matchId = propertyEquals("bannerImage", "id");
  return assetsAry
    .filter(matchId)
    .map(getUrl)
    .pop();
}

export function getIconUrl(which, assetsAry) {
  which = which.toLowerCase() === "light" ? "Light" : "Dark";
  const id = `icon${which}`;
  const matchId = propertyEquals(id, "id");
  return assetsAry
    .filter(matchId)
    .map(getUrl)
    .pop();
}

const getUrl = a => a.url;
const propertyEquals = (match, prop) => {
  return obj => obj[prop] === match;
};
