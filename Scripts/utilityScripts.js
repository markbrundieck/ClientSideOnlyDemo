/* temperature conversion */
function CelsiusToFahr(c) {
    if (isNaN(c)) {
        $("#validationDisplay").text('Only enter a number.');
        return;
    }
    else {
        $("#validationDisplay").text('');
    }
    
    if (c < (-273.15)) {
        $("#validationDisplay").text('Value is below absolute zero');
        return;
    } else {
        return 180 / 100 * c + 32;
    }
}
function FahrToCelsius(f) {
    if (isNaN(f)) {
        $("#validationDisplay").text('Only enter a number.');
        return;
    }
    else {
        $("#validationDisplay").text('');
    }
    if (f < (-459.67)) {
        $("#validationDisplay").text('Value is below absolute zero');
        return;
    } else {
        return 100 / 180 * (f - 32);
    }
}