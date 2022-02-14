const fs = require('fs');

function get(file, line) {
  let data = fs.readFileSync(file, 'utf8')
  if (line || line === 0) {
    data = data.split('\n')[line]
    if (data.startsWith("process.env")) {
      return eval(data);
    } else {
      return data;
    }
  } else {
    if (data.startsWith("process.env")) {
      return eval(data);
    } else {
      return data;
    }
  }
}

module.exports = { get }