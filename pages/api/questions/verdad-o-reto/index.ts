import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Question from '../../../../models/verdad-o-reto/Question';

type Data = {
  success: boolean;
  message: string;
  data: typeof Question[] | null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // const { slug } = req.query as { slug: string };
  const { method } = req as { method: string };

  await dbConnect()

  switch (method) {

    case 'GET':
      try {
        const questions = await Question.find({}) /* find all the data in our database */
        res.status(200).json({ 
          success: true, 
          data: questions,
          message: 'Successfully retrieved all questions.'
        });

      } catch (error) {
        res.status(400).json({ 
          success: false,
          message: 'Error retrieving questions.',
          data: null
        });
      }

      break

    case 'POST':
      try {

		console.log(req.body)

        res.status(201).json({ 
          success: true, 
          message: 'Successfully created a new question.',
					data: null
          // data: question 
        });

      } catch (error) {
        res.status(400).json({ 
          success: false,
          message: 'Error creating a new question.',
          data: null
        });
      }
      break

    default:
      res.status(400).json({ 
        success: false,
        message: 'Method not allowed.',
        data: null
      });
      break
  }
}
