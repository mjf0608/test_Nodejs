function anagram(str){
var result = [];

if(!str){
return result;
}

if(str.length == 1){
result.push([str])
return result;
}

if(str.length == 2){
result.push([str[0]+str[1],str[1]+str[0]])
return result
}

for(var i = 0;i<str.length;i++){
for(var j = 0;j<str.length-1;j++){
result.push(str[i] + anagram(drop(str,i))[j])

}

return result ;
}

function drop(str,n){
str.splice(n,1);
}

module.exports = anagram;