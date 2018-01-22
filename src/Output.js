/*
  This function will output the given table to the command line
*/
function commandLine(table){
  for(var i=0;i<table.length;i++){
    var tempLine = "| ";
    for(var j=0;j<table[i].length;j++){
      if(table[i][j]!=1){
        tempLine += "" + table[i][j] +"\t|"
      }else{
        tempLine += "\t|"
      }
    }
    console.log(tempLine)
  }
}

module.exports = {
  commandLine
}
