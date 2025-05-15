

export const userMiddleware = (req,res,next) => {
    
    if(!req.params.age){

        res.json({message: "Provide age"});

    }else if(req.params.age >= 18){

        res.json({message: "You Can Not Access This Page"});

    }

    next()
    
    

}