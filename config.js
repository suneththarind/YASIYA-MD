const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~QEAF0TgA#sWGNXsUGjUrW80M9evxL3jiZTD-Sj_1wzKw0Na0ssmU'
};
