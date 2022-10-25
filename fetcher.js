const args = process.argv.slice(2); //enable command line arguments
const request = require("request"); // allows request
const fs = require("fs"); 

//make request
request(args[0], (err, response) => {
  if (err) {
    console.log(err);
  }
  //writes data from URL to a chosen local file
  fs.writeFile(args[1], JSON.stringify(response), (err) => {
    if (err) {
      console.log(err);
    }
    //gets file size
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.log(err);
      }
      //save file size as variable
      const bytes = stats.size;
      console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`);
    });
  });
});
