function generateNitroCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const sections = [4, 4, 4, 4, 4, 4]; // Format: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX
    let code = '';

    sections.forEach(sectionLength => {
        for (let i = 0; i < sectionLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        code += '-';
    });

    // Remove the last unnecessary dash
    code = code.slice(0, -1);

    return code;
}

document.getElementById('generateButton').addEventListener('click', function() {
    const nitroCode = generateNitroCode();
    
    // Create a link from the generated code
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Generated Nitro Code: 
        <a href="https://discord.gift/${nitroCode}" target="_blank">${nitroCode}</a><br>
        <small>Click the link above to try redeeming the code on Discord. If the code is invalid or used, Discord will notify you.</small>
    `;
});
