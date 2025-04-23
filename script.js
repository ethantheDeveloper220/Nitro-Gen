// Function to generate a random Nitro code
function generateNitroCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nitroCode = '';
    for (let i = 0; i < 6; i++) {
        let segment = '';
        for (let j = 0; j < 4; j++) {
            segment += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        nitroCode += segment;
        if (i < 5) nitroCode += '-';
    }
    return nitroCode;
}

// Function to update the page with the new Nitro code
function updateCodeDisplay() {
    const result = document.getElementById('result');
    const nitroCode = generateNitroCode();
    const link = `https://discord.gift/${nitroCode}`;
    result.innerHTML = `Generated Nitro Code: <a href="${link}" target="_blank">${nitroCode}</a><br><small>Try redeeming the code by clicking the link above.</small>`;
}

// Adding event listener to the button to keep generating codes
document.getElementById('generateButton').addEventListener('click', updateCodeDisplay);
