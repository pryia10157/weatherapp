
//data from: https://datahub.io/core/sea-level-rise
// json file: https://pkgstore.datahub.io/core/sea-level-rise/csiro_alt_gmsl_yr_2015_json/data/6bcdffba5d8239df0306de8938bbf567/csiro_alt_gmsl_yr_2015_json.json

sea = [
    {
    GMSL: 1.4,
    Time: "1993-03-15"
    },
    {
    GMSL: 2.7,
    Time: "1994-03-15"
    },
    {
    GMSL: 5.7,
    Time: "1995-03-15"
    },
    {
    GMSL: 11.4,
    Time: "1996-03-15"
    },
    {
    GMSL: 16.1,
    Time: "1997-03-15"
    },
    {
    GMSL: 21.9,
    Time: "1998-03-15"
    },
    {
    GMSL: 22.1,
    Time: "1999-03-15"
    },
    {
    GMSL: 25,
    Time: "2000-03-15"
    },
    {
    GMSL: 29.6,
    Time: "2001-03-15"
    },
    {
    GMSL: 33.3,
    Time: "2002-03-15"
    },
    {
    GMSL: 35.4,
    Time: "2003-03-15"
    },
    {
    GMSL: 37.6,
    Time: "2004-03-15"
    },
    {
    GMSL: 41.4,
    Time: "2005-03-15"
    },
    {
    GMSL: 42.9,
    Time: "2006-03-15"
    },
    {
    GMSL: 43.2,
    Time: "2007-03-15"
    },
    {
    GMSL: 48.6,
    Time: "2008-03-15"
    },
    {
    GMSL: 53.5,
    Time: "2009-03-15"
    },
    {
    GMSL: 54.9,
    Time: "2010-03-15"
    },
    {
    GMSL: 54.6,
    Time: "2011-03-15"
    },
    {
    GMSL: 65.4,
    Time: "2012-03-15"
    },
    {
    GMSL: 67.9,
    Time: "2013-03-15"
    },
    {
    GMSL: 71.3,
    Time: "2014-03-15"
    }
    ];

let g=[];
let year=[];
for (let j =0; j < sea.length; j++){
    g.push(sea[j].GMSL); 
    year.push(sea[j].Time); 
}


let mychart1 = document.getElementById('myChart');

let chart1 = new Chart(mychart1,{
    type: 'line',
    data: {
        labels: year,
        datasets: [{
            label:"Global Mean Sea Level in mm",
            fill: true,
            lineTension: 0,
            pointRadius: 5,
            data: g,
            backgroundColor: "rgba(221, 86, 23,0.5)",
        }],
    },
    options: { 
        legend: {
            labels: {
                fontColor: "white",
                fontSize: 25
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: false
                },
                scaleLabel: {
                    fontColor: "white",
                    fontSize: 20,
                    display: true,
                    labelString: "Global Mean Sea Level in mm"
                  }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    beginAtZero: false
                },
                scaleLabel: {
                    fontColor: "white",
                    fontSize: 20,
                    display: true,
                    labelString: "year"
                  }
            }]
        }
    }
});

