/* Our labels along the x-axis
var years = [2010, 2014, 2015, 2016];
// For drawing the lines
var africa = [50426, 55048, 53431, 57771];
var asia = [196722,	256230,	269763,	292806	];
var europe = [488954, 576128, 603658, 616190];
var latinAmerica = [31037, 38665, 41034, 43564];
var northAmerica = [119041,	143199,	151627,	155774];
var oceania = [11386, 13259, 14265, 15604];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
  	{ 
	  data: europe,
	  label: "Europe",
	  borderColor: "#DF6513",
	  fill: false
	},
    { 
 	 	data: asia,
  		label: "Asia",
  		borderColor: "#ffd700",
  		fill: false
	},

	{ 
	  data: northAmerica,
	  label: "North America",
	  borderColor: "#000047",
	  fill: false
	},
	  { 
    	data: africa,
        label: "Africa",
        borderColor: "#de3242",
        fill: false
    },
    	{ 
	  data: latinAmerica,
	  label: "Latin America",
	  borderColor: "#009933",
	  fill: false
	},
	{ 
	  data: oceania,
	  label: "Oceania",
	  borderColor: "#209dd4",
	  fill: false
	}
    ]
  }
});
*/

new Chart(document.getElementById("otherChart"), {
    type: 'horizontalBar',
    data: {
      labels: ["France", "USA", "Spain", "China", "Italy", "United Kingdom", "Germany", "Mexico", "Thailand"],
      datasets: [
        {
          label: "International Turists (millions)",
          backgroundColor: ["#8fc0ca", "#4b9aab","#1f8196","#186778","#155a69", "#124d5a", "0f404b", "#0c333c", "#000000"],
          data: [82.6, 75.6, 75.6, 59.3, 52.4, 35.8, 35.6, 35.0, 32.6]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Most visited places (millions) in 2016'
      }
    }
});



