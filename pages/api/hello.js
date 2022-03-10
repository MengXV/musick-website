import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await addFeedback(req, res);
    } else if (req.method === 'GET'){
        return await readFeedbacks(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

//This logic is only for read database
//means that if we want to show the list on the front-end  

// async function readFeedbacks(req, res){
//     const body = req.body;
//     try {
//         const feedbacks = await prisma.feedback.findMany();
//         return res.status(200).json(feedbacks, { success: true});
//     } catch (error){
//         console.log(error)
//         return res.status(500).json({error : "Error reading from database", success: false});
//     }
// }

async function addFeedback(req, res) {
    const body = req.body;
    try {
        const newEntry = await prisma.feedback.create({
            data: {
                userName: body.userName,
                userEmail: body.userEmail,
                userFeedback: body.userFeedback
            }
        });
        return res.status(200).json(newEntry, {success: true});
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error adding feedback", success:false });
    }
}