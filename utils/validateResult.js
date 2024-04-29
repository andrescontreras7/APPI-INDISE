const  {validationResult} = require ("express-validator")

 const validateResult = (req,res,next)=>{
    try{
        validationResult(req).throw();
        return next();
    }catch(error){

        res.status(403).json({
                type:"error",
                code:403,
                message:error.array()
        })

    }

}

module.exports = validateResult