
function parseInputs(){
    var i_p00 = document.getElementById('i_p00').value;
    var f_p00 = document.getElementById('f_p00').value;

    var i_p10 = document.getElementById('i_p10').value;
    var f_p10 = document.getElementById('f_p10').value;

    var i_p01 = document.getElementById('i_p01').value;
    var f_p01 = document.getElementById('f_p01').value;

    var i_p20 = document.getElementById('i_p20').value;
    var f_p20 = document.getElementById('f_p20').value;

    var i_p11 = document.getElementById('i_p11').value;
    var f_p11 = document.getElementById('f_p11').value;

    var i_p02 = document.getElementById('i_p02').value;
    var f_p02 = document.getElementById('f_p02').value;

    var i_p30 = document.getElementById('i_p30').value;
    var f_p30 = document.getElementById('f_p30').value;

    var i_p21 = document.getElementById('i_p21').value;
    var f_p21 = document.getElementById('f_p21').value;

    var i_p12 = document.getElementById('i_p12').value;
    var f_p12 = document.getElementById('f_p12').value;

    var i_p03 = document.getElementById('i_p03').value;
    var f_p03 = document.getElementById('f_p03').value;

    var i_p40 = document.getElementById('i_p40').value;
    var f_p40 = document.getElementById('f_p40').value;

    var i_p31 = document.getElementById('i_p31').value;
    var f_p31 = document.getElementById('f_p31').value;

    var i_p22 = document.getElementById('i_p22').value;
    var f_p22 = document.getElementById('f_p22').value;

    var i_p13 = document.getElementById('i_p13').value;
    var f_p13 = document.getElementById('f_p13').value;

    var i_p04 = document.getElementById('i_p04').value;
    var f_p04 = document.getElementById('f_p04').value;

    var x_min = document.getElementById('x_min').value;
    var x_max = document.getElementById('x_max').value;

    var y_min = document.getElementById('y_min').value;
    var y_max = document.getElementById('y_max').value;

    Decimal.set({ precision: 5, rounding: 4 })

    Decimal4 = Decimal.clone({ precision: 4, rounding: 1 })
    Decimal6 = Decimal.clone({ precision: 6, rounding: 1 })

    var p00 = new Decimal4(i_p00 + "." + f_p00);
    var p10 = new Decimal6(i_p10 + "." + f_p10);
    var p01 = new Decimal6(i_p01 + "." + f_p01);
    var p20 = new Decimal6(i_p20 + "." + f_p20);
    var p11 = new Decimal6(i_p11 + "." + f_p11);
    var p02 = new Decimal6(i_p02 + "." + f_p02);
    var p30 = new Decimal6(i_p30 + "." + f_p30);
    var p21 = new Decimal6(i_p21 + "." + f_p21);
    var p12 = new Decimal6(i_p12 + "." + f_p12);
    var p03 = new Decimal6(i_p03 + "." + f_p03);
    var p40 = new Decimal6(i_p40 + "." + f_p40);
    var p31 = new Decimal6(i_p31 + "." + f_p31);
    var p22 = new Decimal6(i_p22 + "." + f_p22);
    var p13 = new Decimal6(i_p13 + "." + f_p13);
    var p04 = new Decimal6(i_p04 + "." + f_p04);

    var z = [];
    for(var y = y_min; y < y_max; y++){
        var row = [];
        for(var x = x_min; x < x_max; x++){
            var power = p00 + p10*x + p01*y + p20*x^2 + p11*x*y + p02*y^2 + p30*x^3 + p21*x^2*y 
                    + p12*x*y^2 + p03*y^3 + p40*x^4 + p31*x^3*y + p22*x^2*y^2 
                    + p13*x*y^3 + p04*y^4
            row.push(power);
        }
        z.push(row);
    }

    var data = [{
        z: z,
        type: 'surface',
    }];

    var layout = {
        title: 'Laser Power vs. X,Y Position',
        autosize: false,
        width: 784,
        height: 784,
        margin: {
          l: 65,
          r: 50,
          b: 65,
          t: 90,
        }
      };

    Plotly.newPlot('surfacePower', data, layout);
}    