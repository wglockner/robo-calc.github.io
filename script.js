// Function to switch between calculator tabs using the dropdown menu
function openDropdownTab() {
    var dropdown = document.getElementById('calculator-dropdown');
    var selectedValue = dropdown.value;
    var tabContents = document.getElementsByClassName('tab-content');

    // Hide all tab contents
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Display the selected tab content
    document.getElementById(selectedValue).style.display = 'block';
}

// Ensure the initial selected tab is displayed when the page loads
document.addEventListener('DOMContentLoaded', function() {
    openDropdownTab();
});

// Function for Motor Power Supply Calculation
function calculatePowerSupply() {
    const stepAngle = parseFloat(document.getElementById('step-angle').value);
    const currentPerPhase = parseFloat(document.getElementById('current').value);
    const voltage = parseFloat(document.getElementById('voltage').value);
    const numberOfMotors = parseInt(document.getElementById('number-of-motors').value);

    if (stepAngle > 0 && currentPerPhase > 0 && voltage > 0 && numberOfMotors >= 1) {
        const totalCurrent = currentPerPhase * numberOfMotors;
        const totalVoltage = voltage;
        document.getElementById('result').innerText = 
            `Required Power Supply:\nVoltage: ${totalVoltage.toFixed(2)} V (Volts)\nCurrent: ${totalCurrent.toFixed(2)} A (Amps)`;
    } else {
        document.getElementById('result').innerText = '';
    }
}

// Function for Battery Life Calculation
function calculateBatteryLife() {
    const capacity = parseFloat(document.getElementById('battery-capacity').value);
    const currentDraw = parseFloat(document.getElementById('current-draw').value);

    if (capacity > 0 && currentDraw > 0) {
        const batteryLife = capacity / (currentDraw * 1000); // Convert mAh to Ah if needed
        document.getElementById('battery-result').innerText = 
            `Estimated Battery Life: ${batteryLife.toFixed(2)} hours`;
    } else {
        document.getElementById('battery-result').innerText = '';
    }
}

// Function for Voltage Divider Calculation
function calculateVoltageDivider() {
    const inputVoltage = parseFloat(document.getElementById('input-voltage').value);
    const resistor1 = parseFloat(document.getElementById('resistor1').value);
    const resistor2 = parseFloat(document.getElementById('resistor2').value);

    if (inputVoltage > 0 && resistor1 > 0 && resistor2 > 0) {
        const outputVoltage = (inputVoltage * resistor2) / (resistor1 + resistor2);
        document.getElementById('voltage-divider-result').innerText = 
            `Output Voltage: ${outputVoltage.toFixed(2)} V`;
    } else {
        document.getElementById('voltage-divider-result').innerText = '';
    }
}

// Function for Ohm's Law Calculation
function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage-ohms-law').value);
    const current = parseFloat(document.getElementById('current-ohms-law').value);
    const resistance = parseFloat(document.getElementById('resistance-ohms-law').value);

    if (voltage && current) {
        document.getElementById('ohms-law-result').innerText = `Resistance: ${(voltage / current).toFixed(2)} Ω`;
    } else if (voltage && resistance) {
        document.getElementById('ohms-law-result').innerText = `Current: ${(voltage / resistance).toFixed(2)} A`;
    } else if (current && resistance) {
        document.getElementById('ohms-law-result').innerText = `Voltage: ${(current * resistance).toFixed(2)} V`;
    } else {
        document.getElementById('ohms-law-result').innerText = '';
    }
}

// Function for LED Resistor Calculation
function calculateLEDResistor() {
    const supplyVoltage = parseFloat(document.getElementById('supply-voltage').value);
    const ledForwardVoltage = parseFloat(document.getElementById('led-forward-voltage').value);
    const ledCurrent = parseFloat(document.getElementById('led-current').value);

    if (supplyVoltage > 0 && ledForwardVoltage > 0 && ledCurrent > 0) {
        const resistorValue = (supplyVoltage - ledForwardVoltage) / (ledCurrent / 1000); // Convert mA to A
        document.getElementById('led-resistor-result').innerText = 
            `Required Resistor Value: ${resistorValue.toFixed(2)} Ω`;
    } else {
        document.getElementById('led-resistor-result').innerText = '';
    }
}

// Function for Capacitor Charge Time Calculation
function calculateCapacitorChargeTime() {
    const capacitance = parseFloat(document.getElementById('capacitance').value);
    const resistance = parseFloat(document.getElementById('resistance').value);

    if (capacitance > 0 && resistance > 0) {
        const chargeTime = resistance * capacitance; // Time constant (τ = RC)
        document.getElementById('capacitor-charge-result').innerText = 
            `Charge Time (to 63% of full voltage): ${chargeTime.toFixed(2)} seconds`;
    } else {
        document.getElementById('capacitor-charge-result').innerText = '';
    }
}

// Function for Motor Power and Efficiency Calculation
function calculateMotorPower() {
    const voltage = parseFloat(document.getElementById('motor-voltage').value);
    const current = parseFloat(document.getElementById('motor-current').value);
    const torque = parseFloat(document.getElementById('motor-torque').value);
    const speed = parseFloat(document.getElementById('motor-speed').value);

    if (voltage > 0 && current > 0 && torque > 0 && speed > 0) {
        const powerInput = voltage * current; // Input power in watts
        const powerOutput = (torque * speed * 2 * Math.PI) / 60; // Output power in watts (convert RPM to rad/s)
        const efficiency = (powerOutput / powerInput) * 100; // Efficiency in percentage
        document.getElementById('motor-power-result').innerText = 
            `Input Power: ${powerInput.toFixed(2)} W\nOutput Power: ${powerOutput.toFixed(2)} W\nEfficiency: ${efficiency.toFixed(2)}%`;
    } else {
        document.getElementById('motor-power-result').innerText = '';
    }
}

// Function for PCB Trace Width Calculation
function calculatePCBTraceWidth() {
    const current = parseFloat(document.getElementById('trace-current').value);
    const temperatureRise = parseFloat(document.getElementById('temperature-rise').value);

    if (current > 0 && temperatureRise > 0) {
        const traceWidth = (current / (0.048 * Math.pow(temperatureRise, 0.44))); // Simplified IPC-2221 formula
        document.getElementById('pcb-trace-result').innerText = 
            `Required PCB Trace Width: ${traceWidth.toFixed(2)} mm`;
    } else {
        document.getElementById('pcb-trace-result').innerText = '';
    }
}

// Function for Inductor-Capacitor Resonance Calculation
function calculateResonance() {
    const inductance = parseFloat(document.getElementById('inductance').value);
    const capacitance = parseFloat(document.getElementById('capacitance').value);

    if (inductance > 0 && capacitance > 0) {
        const frequency = 1 / (2 * Math.PI * Math.sqrt(inductance * capacitance)); // Resonant frequency formula
        document.getElementById('resonance-result').innerText = 
            `Resonant Frequency: ${frequency.toFixed(2)} Hz`;
    } else {
        document.getElementById('resonance-result').innerText = '';
    }
}

// Function for Power Dissipation Calculation
function calculatePowerDissipation() {
    const voltage = parseFloat(document.getElementById('voltage-dissipation').value);
    const current = parseFloat(document.getElementById('current-dissipation').value);

    if (voltage > 0 && current > 0) {
        const powerDissipation = voltage * current; // Power dissipation formula
        document.getElementById('power-dissipation-result').innerText = 
            `Power Dissipation: ${powerDissipation.toFixed(2)} W`;
    } else {
        document.getElementById('power-dissipation-result').innerText = '';
    }
}

// Function for Decibel (dB) Calculation
function calculateDecibels() {
    const inputPower = parseFloat(document.getElementById('input-power').value);
    const outputPower = parseFloat(document.getElementById('output-power').value);

    if (inputPower > 0 && outputPower > 0) {
        const decibels = 10 * Math.log10(outputPower / inputPower); // Decibel calculation
        document.getElementById('db-calculator-result').innerText = 
            `Gain/Loss: ${decibels.toFixed(2)} dB`;
    } else {
        document.getElementById('db-calculator-result').innerText = '';
    }
}

// Function for PWM Calculation
function calculatePWM() {
    const frequency = parseFloat(document.getElementById('frequency').value);
    const dutyCycle = parseFloat(document.getElementById('duty-cycle').value);

    if (frequency > 0 && dutyCycle > 0 && dutyCycle <= 100) {
        const pulseWidth = (1 / frequency) * (dutyCycle / 100); // Pulse width calculation
        document.getElementById('pwm-result').innerText = 
            `Pulse Width: ${pulseWidth.toFixed(6)} seconds`;
    } else {
        document.getElementById('pwm-result').innerText = '';
    }
}

// Function for Circuit Impedance Calculation
function calculateImpedance() {
    const resistance = parseFloat(document.getElementById('resistance-impedance').value);
    const inductance = parseFloat(document.getElementById('inductance-impedance').value);
    const capacitance = parseFloat(document.getElementById('capacitance-impedance').value);
    const frequency = parseFloat(document.getElementById('impedance-frequency').value);

    if (resistance >= 0 && inductance >= 0 && capacitance >= 0 && frequency > 0) {
        const inductiveReactance = 2 * Math.PI * frequency * inductance;
        const capacitiveReactance = 1 / (2 * Math.PI * frequency * capacitance);
        const impedance = Math.sqrt(Math.pow(resistance, 2) + Math.pow(inductiveReactance - capacitiveReactance, 2));
        document.getElementById('impedance-result').innerText = 
            `Circuit Impedance: ${impedance.toFixed(2)} Ω`;
    } else {
        document.getElementById('impedance-result').innerText = '';
    }
}

// Function for Current Divider Calculation
function calculateCurrentDivider() {
    const totalCurrent = parseFloat(document.getElementById('total-current').value);
    const resistor1 = parseFloat(document.getElementById('resistor-branch1').value);
    const resistor2 = parseFloat(document.getElementById('resistor-branch2').value);

    if (totalCurrent > 0 && resistor1 > 0 && resistor2 > 0) {
        const current1 = totalCurrent * (resistor2 / (resistor1 + resistor2));
        const current2 = totalCurrent - current1;
        document.getElementById('current-divider-result').innerText = 
            `Current through Branch 1: ${current1.toFixed(2)} A\nCurrent through Branch 2: ${current2.toFixed(2)} A`;
    } else {
        document.getElementById('current-divider-result').innerText = '';
    }
}

// Function for Thermal Heat Sink Calculation
function calculateThermalHeatSink() {
    const powerDissipation = parseFloat(document.getElementById('power-dissipation').value);
    const thermalResistance = parseFloat(document.getElementById('thermal-resistance').value);
    const ambientTemperature = parseFloat(document.getElementById('ambient-temperature').value);

    if (powerDissipation > 0 && thermalResistance > 0) {
        const requiredThermalResistance = (ambientTemperature + (powerDissipation * thermalResistance)) / powerDissipation;
        document.getElementById('thermal-result').innerText = 
            `Required Heat Sink Thermal Resistance: ${requiredThermalResistance.toFixed(2)} °C/W`;
    } else {
        document.getElementById('thermal-result').innerText = '';
    }
}
