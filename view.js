var j = 200000,
	chunk = 1000,
	subset;
  var items = [];
for(i=0;i<j;i++){
	items.push(i);
}
for (var i=0; i < j; i += chunk) {
    subset = items.slice(i, i+chunk);
    console.log(subset);
}
