var fs = require('fs')

/*
  This function will output the given table to the command line
*/
function commandLine(list,print,tests){
  list.unshift(1)
  for(var i=0;i<list.length;i++){
    var tempLine = "| ";
    for(var j=0;j<list.length;j++){
      var multiple = (list[i]*list[j])
      if(multiple!=1){
        tempLine += multiple + "\t|"
      }else{
        tempLine += "\t|"
      }
      tests(i,j,multiple)
    }
    if(print){ console.log(tempLine) }
  }
}

function CSV(list){
  fs.writeFileSync('table.csv','')
  for(var i=0;i<list.length;i++){
    var tempLine = ""
    for(var j=0;j<list.length-1;j++){
      var multiple = list[i]*list[j]
      if(multiple!=1){
        tempLine += (multiple)+","
      }else{
        tempLine += ","
      }
    }
    tempLine += (list[i]*list[list.length-1])+"\n"
    console.log(tempLine)
    fs.appendFileSync('table.csv', tempLine);
  }
}

module.exports = {
  commandLine,
  CSV
}
