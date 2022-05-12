var https = require('https');
var fs = require('fs');


var https_options = {
    key: fs.readFileSync("public/ssl/infomits.live.key"),
    cert: fs.readFileSync("public/ssl/infomits.live.cert"),
    ca: [
    fs.readFileSync('origin'),
    fs.readFileSync('path/to/ca_bundle_certificate.crt')
    ]
    };