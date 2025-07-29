const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../img/slider", false, /\.(png|jpe?g|svg)$/)
);

export default images;
