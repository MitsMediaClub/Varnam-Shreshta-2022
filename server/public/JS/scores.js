function writeDate(obj){
    const fs = require('fs')
    const jsonString = JSON.stringify(obj)
    fs.writeFile('./newCustomer.json', jsonString, err => {
        if (err) {
                console.log('Error writing file', err)
        } else {
                console.log('Successfully wrote file')
        }
    })
}