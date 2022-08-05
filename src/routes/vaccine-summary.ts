import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/v1/vaccine-summary',( req: Request,res: Response) => {
    console.log(req)
    return res.send('hello')
});

export {router as vaccineSummary}