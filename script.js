// Importing QRCode library
document.getElementById('generate-btn').addEventListener('click', function () {
    const data = document.getElementById('qr-data').value;
    const color = document.getElementById('qr-color').value;

    if (!data) {
        alert('Please enter some data!');
        return;
    }

    const qrPreview = document.getElementById('qr-preview');
    qrPreview.innerHTML = ''; // Clear previous QR code

    // Create QR code
    const qrCode = new QRCode(qrPreview, {
        text: data,
        width: 200,
        height: 200,
        colorDark: color,
        colorLight: "#ffffff",
    });

    // Show download button
    document.getElementById('download-btn').style.display = 'block';
});

// Download QR Code
document.getElementById('download-btn').addEventListener('click', function () {
    const qrCanvas = document.querySelector('#qr-preview canvas');
    const link = document.createElement('a');
    link.href = qrCanvas.toDataURL('image/png');
    link.download = 'qr-code.png';
    link.click();
});