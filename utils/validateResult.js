const  {validationResult} = require ("express-validator")

 const validateResult = (req,res,next)=>{
    try{
        validationResult(req).throw();
        return next();
    }catch(error){

        res.status(400).json({
                type:"error",
                code:400,
                message:error.array()
        })

    }

}

module.exports = validateResult