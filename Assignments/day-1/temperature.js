// assignment-2a-temperature.js

// Create a temperature converter
// Input: value, fromUnit, toUnit
// Output: converted value

function convertTemperature(value, fromUnit, toUnit) {
    if(fromUnit == 'C' && toUnit == 'F'){
        return (value * 9/5) + 32;
    }
    else if(fromUnit == 'F' && toUnit == 'C'){
        return (value - 32) * 5/9;
    }
    else if(fromUnit == 'C' && toUnit == 'K'){
        return value + 273.15
    }
    else if(fromUnit == 'K' && toUnit == 'C'){
        return value - 273.15
    }
    else if(fromUnit == 'F' && toUnit == 'K'){
        return (value - 32) * 5/9 + 273.15
    }
    else if(fromUnit == 'K' && toUnit == 'F'){
        return (K - 273.15) * 9/5 + 32
    }
    else{
        return 'Invalid Unit'
    }

  // Support: C (Celsius), F (Fahrenheit), K (Kelvin)
  // Use if/else to determine conversion
  
  // YOUR CODE HERE
}

// Test cases:
console.log(convertTemperature(0, "C", "F"));    // 32
console.log(convertTemperature(32, "F", "C"));   // 0
console.log(convertTemperature(273.15, "K", "C")); // 0
console.log(convertTemperature(100, "C", "K"));  // 373.15


// Formulas:
// C to F: (C × 9/5) + 32
// F to C: (F - 32) × 5/9
// C to K: C + 273.15
// K to C: K - 273.15
// F to K: (F - 32) × 5/9 + 273.15
// K to F: (K - 273.15) × 9/5 + 32