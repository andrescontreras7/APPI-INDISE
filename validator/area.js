const {check} = require('express-validator')

const ValidatorCreateArea = [
    check('cod_area').exists(),
    check('area_nombre').exists()

]






module.exports = ValidatorCreateArea;