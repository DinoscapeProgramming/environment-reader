const fs = require('fs');

const env = function (file, line) {
  let data = fs.readFileSync(file, 'utf8')
  if (line || line === 0) {
    data = data.split('\n')[line]
    if (data.startsWith("process.env")) {
      return eval(data);
    } else {
      return data;
    }
  } else {
    data = data.split('\n')
    data.forEach(content => {
      if (content.startsWith("process.env")) {
        data[data.indexOf(content)] = eval(content)
      }
    })
    data = data.join('\n')
    return data;
  }
}

module.exports = env
