const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");

request(args[0], (err, response) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(args[1], JSON.stringify(response), (err) => {
    if (err) {
      console.log(err);
    }
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.log(err);
      }
      const bytes = stats.size;
      console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`);
    });
  });
});
