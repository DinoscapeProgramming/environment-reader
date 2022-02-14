const env = require('./environment-reader');
const settings = {
  file: "./text.txt"
}

console.log(env.get(settings.file))
// gets the whole content in the file

console.log(env.get(settings.file, 3))
// gets the fourth line in the file
