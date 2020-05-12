// data from: https://datahub.io/core/co2-ppm
// jason file: https://pkgstore.datahub.io/core/co2-ppm/co2-annmean-mlo_json/data/5168771a128447a2d4c8a77e40844134/co2-annmean-mlo_json.json





let C = [{
    Mean: 325.68,
    Uncertainty: 0.12,
    Year: "1970-11-01"
    },
    {
    Mean: 326.32,
    Uncertainty: 0.12,
    Year: "1971-11-01"
    },
    {
    Mean: 327.45,
    Uncertainty: 0.12,
    Year: "1972-11-01"
    },
    {
    Mean: 329.68,
    Uncertainty: 0.12,
    Year: "1973-11-01"
    },
    {
    Mean: 330.18,
    Uncertainty: 0.12,
    Year: "1974-11-01"
    },
    {
    Mean: 331.11,
    Uncertainty: 0.12,
    Year: "1975-11-01"
    },
    {
    Mean: 332.04,
    Uncertainty: 0.12,
    Year: "1976-11-01"
    },
    {
    Mean: 333.83,
    Uncertainty: 0.12,
    Year: "1977-11-01"
    },
    {
    Mean: 335.4,
    Uncertainty: 0.12,
    Year: "1978-11-01"
    },
    {
    Mean: 336.84,
    Uncertainty: 0.12,
    Year: "1979-11-01"
    },
    {
    Mean: 338.75,
    Uncertainty: 0.12,
    Year: "1980-11-01"
    },
    {
    Mean: 340.11,
    Uncertainty: 0.12,
    Year: "1981-11-01"
    },
    {
    Mean: 341.45,
    Uncertainty: 0.12,
    Year: "1982-11-01"
    },
    {
    Mean: 343.05,
    Uncertainty: 0.12,
    Year: "1983-11-01"
    },
    {
    Mean: 344.65,
    Uncertainty: 0.12,
    Year: "1984-11-01"
    },
    {
    Mean: 346.12,
    Uncertainty: 0.12,
    Year: "1985-11-01"
    },
    {
    Mean: 347.42,
    Uncertainty: 0.12,
    Year: "1986-11-01"
    },
    {
    Mean: 349.19,
    Uncertainty: 0.12,
    Year: "1987-11-01"
    },
    {
    Mean: 351.57,
    Uncertainty: 0.12,
    Year: "1988-11-01"
    },
    {
    Mean: 353.12,
    Uncertainty: 0.12,
    Year: "1989-11-01"
    },
    {
    Mean: 354.39,
    Uncertainty: 0.12,
    Year: "1990-11-01"
    },
    {
    Mean: 355.61,
    Uncertainty: 0.12,
    Year: "1991-11-01"
    },
    {
    Mean: 356.45,
    Uncertainty: 0.12,
    Year: "1992-11-01"
    },
    {
    Mean: 357.1,
    Uncertainty: 0.12,
    Year: "1993-11-01"
    },
    {
    Mean: 358.83,
    Uncertainty: 0.12,
    Year: "1994-11-01"
    },
    {
    Mean: 360.82,
    Uncertainty: 0.12,
    Year: "1995-11-01"
    },
    {
    Mean: 362.61,
    Uncertainty: 0.12,
    Year: "1996-11-01"
    },
    {
    Mean: 363.73,
    Uncertainty: 0.12,
    Year: "1997-11-01"
    },
    {
    Mean: 366.7,
    Uncertainty: 0.12,
    Year: "1998-11-01"
    },
    {
    Mean: 368.38,
    Uncertainty: 0.12,
    Year: "1999-11-01"
    },
    {
    Mean: 369.55,
    Uncertainty: 0.12,
    Year: "2000-11-01"
    },
    {
    Mean: 371.14,
    Uncertainty: 0.12,
    Year: "2001-11-01"
    },
    {
    Mean: 373.28,
    Uncertainty: 0.12,
    Year: "2002-11-01"
    },
    {
    Mean: 375.8,
    Uncertainty: 0.12,
    Year: "2003-11-01"
    },
    {
    Mean: 377.52,
    Uncertainty: 0.12,
    Year: "2004-11-01"
    },
    {
    Mean: 379.8,
    Uncertainty: 0.12,
    Year: "2005-11-01"
    },
    {
    Mean: 381.9,
    Uncertainty: 0.12,
    Year: "2006-11-01"
    },
    {
    Mean: 383.79,
    Uncertainty: 0.12,
    Year: "2007-11-01"
    },
    {
    Mean: 385.6,
    Uncertainty: 0.12,
    Year: "2008-11-01"
    },
    {
    Mean: 387.43,
    Uncertainty: 0.12,
    Year: "2009-11-01"
    },
    {
    Mean: 389.9,
    Uncertainty: 0.12,
    Year: "2010-11-01"
    },
    {
    Mean: 391.65,
    Uncertainty: 0.12,
    Year: "2011-11-01"
    },
    {
    Mean: 393.85,
    Uncertainty: 0.12,
    Year: "2012-11-01"
    },
    {
    Mean: 396.52,
    Uncertainty: 0.12,
    Year: "2013-11-01"
    },
    {
    Mean: 398.65,
    Uncertainty: 0.12,
    Year: "2014-11-01"
    },
    {
    Mean: 400.83,
    Uncertainty: 0.12,
    Year: "2015-11-01"
    },
    {
    Mean: 404.24,
    Uncertainty: 0.12,
    Year: "2016-11-01"
    },
    {
    Mean: 406.55,
    Uncertainty: 0.12,
    Year: "2017-11-01"
    }
    ];

let me=[100];
let ye=[100];
for (let j =0; j < C.length; j++){
    me.push(C[j].Mean); // pushes the mean from the array of objrects C  into an array me
    ye.push(C[j].Year); // pushes the year from the array of objects C into an array ye
}

console.log(me);


let mychart1 = document.getElementById('myChart');

let chart1 = new Chart(mychart1,{
    type: 'bar',
    data: {
        labels: ye,
        datasets: [{
            label:"CO2",
            fill: true,
            lineTension: 0,
            data: me,
            backgroundColor: "rgba(41,42,39,0.85)",
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
                    fontSize: 15,
                    display: true,
                    labelString: "Annual CO2 mole fraction increase (ppm)"
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
                    fontSize: 15,
                    display: true,
                    labelString: "Years"
                  }

            }]

        }
    }
});



