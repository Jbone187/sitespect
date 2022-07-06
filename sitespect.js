let fs = require("fs");
let readline = require("readline");

let arr = [];
let line_number = 0;

let RL = readline.createInterface({
  input: fs.createReadStream("messages"),
});

function pullValue(value) {
  RL.on("line", function (line) {
    line_number++;
    let newValue = line.split(" ");
    value(newValue);
    newValue.map((line) => arr.push(line));
  });
}

pullValue(function (line_data) {
  let instance_of_process = 0;
  let message = line_data.slice(5);
  let message_join = message.join();
  let message_join_replace = message_join.replace(/,/g, " ");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "vagrant-centosv3") instance_of_process++;
  }

  console.table({
    Month: line_data[0],
    Date: line_data[1],
    "Name of Process": line_data[3],
    "Line Number": line_number,
    "Process ID": line_data[4],
    "Error Message": message_join_replace,
    "Times Process is Referenced": instance_of_process,
  });
});
