import { AnySchemaObject } from 'ajv';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { FromSchema } from 'json-schema-to-ts';

// type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
// export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

export const formatJSONResponse = (response) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    body: JSON.stringify(response),
  };
};

export const successResponse = (statusCode = 200, message = '', data = {}) => {
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
};

export const errorResponse = (statusCode = 400, message = 'error') => {
  return {
    statusCode: statusCode,
    message: message,
  };
};
