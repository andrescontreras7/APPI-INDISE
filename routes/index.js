const express = require("express")
const fs = require('fs');
const router = express.Router();
const PATH_ROUTE = __dirname;



//funcion para remover la extension

const Remove =  (FileName) =>{

    return FileName.split(".").shift()
}
const a = fs.readdirSync(PATH_ROUTE).filter((file =>{

    const name = Remove(file);

    if(name !== 'index'){
        router.use(`/${name}`, require (`./${file}`))
    }


}))
console.log(a)



module.exports = router

