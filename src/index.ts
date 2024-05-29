import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { awsLambdaFastify } from '@fastify/aws-lambda';
import app from './app';

const proxy = awsLambdaFastify(app);

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  return proxy(event, context);
};