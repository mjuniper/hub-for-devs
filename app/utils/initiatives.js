export function getBannerImageUrl(assetsAry) {
  return assetsAry.filter(a => a.id === 'bannerImage')
    .map(a => a.url)[0];
}

export function getIconUrl(which, assetsAry) {
  which = (which.toLowerCase() === 'light') ? 'Light': 'Dark';
  const id = `icon${which}`;
  return assetsAry.filter(a => a.id === id)
    .map(a => a.url)[0];
}
