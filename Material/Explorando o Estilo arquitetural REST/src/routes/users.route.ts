import { NextFunction, Router,Response, Request } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) =>{
    const users = [{userName: "Marco"}];

    res.status(200).json(users);
});

usersRoute.get('/users/:uudi', (req:Request<{ uuid: string}>, res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(200).send({uuid});
});

usersRoute.post('/users', (req:Request, res:Response, next:NextFunction) =>{
    const newUser = req.body;
    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req:Request<{ uuid: string}>, res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    const modifliedUser = req.body;    
    modifliedUser.uuid = uuid;
    res.status(StatusCodes.OK).send(modifliedUser); 
});

usersRoute.delete('/users/:uuid', (req:Request<{ uuid: string}>, res:Response, next:NextFunction) =>{
    res.status(StatusCodes.OK);
});



export default usersRoute;