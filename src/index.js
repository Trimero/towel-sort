
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix);
  if (matrix == undefined){
    return []
  }
  matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, [])
  console.log(matrix)
  return matrix.flat(Infinity)
 }
 
