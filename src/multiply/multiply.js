const fs = require('fs')

const listTable = (base, limit) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }    
}

const createFile = (base, limit) => {
    return new Promise((resolve, reject)=>{
        if (!Number(base)){
            reject(`The value ${base} it is not a number`)
            return
        }
        let data = ''
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
    
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) 
                reject (err)
            else 
                resolve(`table-${base}.txt`)
        });
    })    
}

module.exports = {
    createFile,
    listTable
}