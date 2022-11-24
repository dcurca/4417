function myMapper(){
	for (var i = 0; i < this.entities.hashtags.length; i++) {
		var key = this.entities.hashtags[i].text;
	emit(key, 1);
	}
}

function myReducer(key, values){
	total = 0;

	for (var i = 0; i < values.length; i++) {
		total += values[i];
	}

	return total;
}

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" })
db.mroutput.aggregate({$sort: {value: -1}})