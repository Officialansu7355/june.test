const currentData = ['a', undefined], index = 1;

if (index in currentData) {
  console.info('exists');
}
// ...vs...
if (typeof currentData[index] !== 'undefined') {
  console.info('exists');
} else {
  console.info('does not exist'); // incorrect!
}