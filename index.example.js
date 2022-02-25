const env = require('./environment-reader');
const settings = {
  file: "./text.example.txt"
}

console.log(env(settings.file))
// gets the whole content in the file

console.log(env(settings.file, 3))
// gets the fourth line in the file
