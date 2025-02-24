function getvalue() {
    let inputvalue = document.getElementById("input1_1").value.trim();
    let selectedval1 = document.getElementById("option1").value;
    let selectedval2 = document.getElementById("option2").value;
    let result;
                                    

    try {
        let decimalValue;
        switch (selectedval1) {
            case 'decimal':
                decimalValue = parseDecimal(inputvalue);
                break;
            case 'binary':
                decimalValue = parseBinary(inputvalue);
                break;
            case 'hexadecimal':
                decimalValue = parseHexadecimal(inputvalue);
                break;
        }

        
        switch (selectedval2) {
            case 'decimal':
                result = decimalValue.toString();
                break;
            case 'binary':
                result = decimalToBinary(decimalValue);
                break;
            case 'hexadecimal':
                result = decimalToHex(decimalValue);
                break;
        }
    } catch (e) {
        result = e.message;
    }

    document.getElementById("output").value = result || "Invalid";
}


function parseDecimal(input) {
    const num = parseInt(input, 10);
    if (isNaN(num)) throw new Error("Invalid decimal input");
    return num;
}

function parseBinary(input) {
    if (!/^[01]+$/.test(input)) throw new Error("Invalid binary input");
    return parseInt(input, 2);
}

function parseHexadecimal(input) {
    if (!/^[0-9a-fA-F]+$/.test(input)) throw new Error("Invalid hexadecimal input");
    return parseInt(input, 16);
}

function decimalToBinary(num) {
    if (num === 0) return '0';
    return num.toString(2);
}

function decimalToHex(num) {
    return num.toString(16).toUpperCase();
}

document.getElementById("convertbutton").addEventListener("click", getvalue);

function changetext() {
    let selectedval1 = document.getElementById("option1").value;
    let selectedval2 = document.getElementById("option2").value;
    let textElement = document.getElementById("text_1");

    if (selectedval1 === "decimal" && selectedval2 === "binary") {
        textElement.innerHTML = `1. Decimal to Binary<br><br>
            Steps:<br>
            - Divide the decimal number by 2<br>
            - Record the remainder<br>
            - Repeat the division process with the quotient until the quotient becomes 0<br>
            - The binary number is the remainders read from bottom to top<br><br>
            Example: Convert 25<sub>10</sub> to binary<br>
            25 ÷ 2 = 12, remainder 1<br>
            12 ÷ 2 = 6, remainder 0<br>
            6 ÷ 2 = 3, remainder 0<br>
            3 ÷ 2 = 1, remainder 1<br>
            1 ÷ 2 = 0, remainder 1<br>
            Answer: 11001<sub>2</sub>`;
    }
    else if (selectedval1 === "binary" && selectedval2 === "decimal") {
        textElement.innerHTML = `2. Binary to Decimal<br><br>
            Steps:<br>
            - Multiply each binary digit by 2<sup>position</sup> (starting from 0 at the right)<br>
            - Sum all the values<br><br>
            Example: Convert 11001<sub>2</sub> to decimal<br>
            (1×2<sup>4</sup>) + (1×2<sup>3</sup>) + (0×2<sup>2</sup>) + (0×2<sup>1</sup>) + (1×2<sup>0</sup>)<br>
            16 + 8 + 0 + 0 + 1 = 25<br>
            Answer: 25<sub>10</sub>`;
    }
    else if (selectedval1 === "binary" && selectedval2 === "hexadecimal") {
        textElement.innerHTML = `3. Binary to Hexadecimal<br><br>
            Steps:<br>
            - Group the binary digits into sets of four (from right to left)<br>
            - Convert each 4-bit group into its hexadecimal equivalent<br><br>
            Example: Convert 11001<sub>2</sub> to hexadecimal<br>
            Pad with leading zeros: 0001 1001<br>
            0001 = 1, 1001 = 9<br>
            Answer: 19<sub>16</sub>`;
    }
    else if (selectedval1 === "hexadecimal" && selectedval2 === "binary") {
        textElement.innerHTML = `4. Hexadecimal to Binary<br><br>
            Steps:<br>
            - Convert each hexadecimal digit into its 4-bit binary equivalent<br><br>
            Example: Convert 2F<sub>16</sub> to binary<br>
            2 → 0010, F → 1111<br>
            Answer: 00101111<sub>2</sub>`;
    }
    else if (selectedval1 === "decimal" && selectedval2 === "hexadecimal") {
        textElement.innerHTML = `5. Decimal to Hexadecimal<br><br>
            Steps:<br>
            - Divide the decimal number by 16<br>
            - Record the remainder as a hexadecimal digit<br>
            - Repeat the process until the quotient becomes 0<br>
            - Read the remainders from bottom to top<br><br>
            Example: Convert 47<sub>10</sub> to hexadecimal<br>
            47 ÷ 16 = 2, remainder 15 (F)<br>
            Answer: 2F<sub>16</sub>`;
    }
    else if (selectedval1 === "hexadecimal" && selectedval2 === "decimal") {
        textElement.innerHTML = `6. Hexadecimal to Decimal<br><br>
            Steps:<br>
            - Multiply each hexadecimal digit by 16<sup>position</sup> (starting from 0 at the right)<br>
            - Sum all the values<br><br>
            Example: Convert 2F<sub>16</sub> to decimal<br>
            (2×16<sup>1</sup>) + (15×16<sup>0</sup>)<br>
            32 + 15 = 47<br>
            Answer: 47<sub>10</sub>`;
    }
    else {
        textElement.innerHTML = "Please select different conversion types";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    changetext();
    document.getElementById("option1").addEventListener("change", changetext);
    document.getElementById("option2").addEventListener("change", changetext);
});