/*
Kelly Wang & Yuyang Zhang
SoftDev2 pd07
K13 -- Scattered 
2018-03-20
*/
//headings are important

var svg = document.getElementById("svg");

var population = [394,
		  8524,
		  5055,
		  27601,
		  9256,
		  2678,
		  10299,
		  116799,
		  1728,
		  21680,
		  3052,
		  1857,
		  363,
		  3372,
		  11761,
		  34395,
		  5751,
		  1078,
		  3900,
		  10039,
		  14578,
		  15173
		 ]

var prop_crime = [6,
		  240,
		  83,
		  662,
		  208,
		  51,
		  260,
		  2525,
		  8,
		  759,
		  60,
		  68,
		  4,
		  23,
		  145,
		  938,
		  151,
		  6,
		  84,
		  706,
		  1204,
		  148
		 ]

var combine = [];
for (x = 0; x < 22; x += 1){
    combine.push([population[x], prop_crime[x]]);
}

var create = function(){
    var container = d3.select("svg");		  
    var dots = container.selectAll("circle").data(combine).enter();
    dots.append("circle")
	.attr("cx", function(d){return (d[0] / 10);})
	.attr("cy", function(d){return d[1];})
	.attr("r", 3);

}

create();

