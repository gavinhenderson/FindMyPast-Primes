var fs = require('fs')

//Generalised output function
//List - the completed prime list
//lineStart - What to start each line with
//delimiter - What to put inbetween each value
//tests - function to run tests on the table
//lineEnd - What to do at the end of each line
function generalOutput(list, lineStart, delimiter, tests, lineEnd){
  //nested loop to created a table line by line
  for(var i=0;i<list.length;i++){
    var tempLine = lineStart
    for(var j=0;j<list.length;j++){
      var multiple = (list[i]*list[j])
      if(multiple!=1) {
        tempLine += multiple + delimiter
      }else{
        tempLine += delimiter
      }
      //Run the test at each cell of the table
      tests(i,j,multiple)
    }
    //Output the line in the specified format
    lineEnd(tempLine)
  }
}

/*
  This function will output the given list to the command line
  list - the list of Primes
  print - a bool of wether or not to print (this is for testing purposes)
  tests - Allows us to pass a function in for testing
*/
function commandLine(list,print,tests){
  //We add 1 to the start of the list so we have the label column and row
  list.unshift(1)
  generalOutput(list,"| ","\t|",tests,function(line){
    if(print){ console.log(line) }
  })
}

/*
  This function takes in a list of primes the outputs the table to table.CSV
*/
function CSV(list){
  list.unshift(1)
  fs.writeFileSync('table.csv','') //Clear the file
  generalOutput(list,"",",",function(){},function(line){
    line += '\n'
    //Synchronously write to the file
    fs.appendFileSync('table.csv', line);
  })
}

module.exports = {
  commandLine,
  CSV
}
