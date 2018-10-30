export default {
  randomize = array => {
    array.sort(() => {
      return 0.5 - Math.random()
    });
 }
}