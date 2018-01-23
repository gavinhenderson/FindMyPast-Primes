/*
  This function will output the given table to the command line
*/
function commandLine(list,print,tests){
  list.unshift(1)
  for(var i=0;i<list.length;i++){
    var tempLine = "| ";
    for(var j=0;j<list.length;j++){
      var multiple = (list[i]*list[j])
      tempLine += multiple + "\t|"
      tests(i,j,multiple)
    }
    if(print){ console.log(tempLine) }
  }
}

module.exports = {
  commandLine
}
