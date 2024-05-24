const QRCode = require('qrcode');

async function generarCodigoQR(text) {
    try {
        const url = await QRCode.toDataURL(text);
        return url;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { generarCodigoQR };
