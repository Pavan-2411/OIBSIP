document.getElementById('convert').addEventListener('click', function() {
    var degrees = parseFloat(document.getElementById('degree').value);
    var temperatureType = document.getElementById('temptype').value;

    if (temperatureType === 'fahrenheit') {
        var celsius = (degrees - 32) * (5 / 9);
    } else if (temperatureType === 'kelvin') {
        var celsius = degrees - 273.15;
    } else {
        alert('Invalid temperature type selected');
        return;
    }
    document.getElementById('celsius').textContent = celsius.toFixed(2);
});
