var https = require('https');
var fs = require('fs');


var https_options = {
    key: fs.readFileSync("./ssl/infomits.live.key"),
    cert: fs.readFileSync("./ssl/infomits.live.cert"),
    ca: [
    fs.readFileSync('origin'),
    fs.readFileSync('path/to/ca_bundle_certificate.crt')
    ]
    };