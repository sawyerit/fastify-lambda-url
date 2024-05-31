## Building your own lambda from scratch
<br />

1. First setup the project environment by running the following commands:
```
mkdir fastify-lambda && cd fastify-lambda
mkdir -p src
mkdir -p src/tests
npm init -y
npm install aws-lambda @types/aws-lambda fastify @fastify/aws-lambda
npm install --save-dev typescript jest ts-jest @types/node @types/jest webpack webpack-cli ts-loader
```
2. Add a tsconfig file to the root:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

3. Add a jest.config.js file to the root:
```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts']
};
```

4. Add src/app.ts...
```
import Fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';

const app = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
  fastify.get('/hello/:id', async (request, reply) => {
	const { id } = request.params as { id: string };
    return { message: `Hello, ${id}!` };
  });

  fastify.post('/hello', async (request, reply) => {
    const body = request.body;
    return { message: 'Hello, World!', data: body };
  });
};

const fastify = Fastify();
fastify.register(app);

export default fastify;
```

5. Add src/index.ts...
```
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { awsLambdaFastify } from '@fastify/aws-lambda';
import app from './app';

const proxy = awsLambdaFastify(app);

export const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  return proxy(event, context);
};
```

6. Add webpack.config.js to the root...
```
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  }
};
```

7. Add src/tests/app.test.ts ...
```
import app from '../app';

describe('GET /hello/:id', () =%3E {
  it('should return a message', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/hello/12345'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, 12345!' });
  });
});

describe('POST /hello', () => {
  it('should return a message with data', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/hello',
      payload: { test: 'data' }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, World!', data: { test: 'data' } });
  });
});
```
8. Add the following commands to the package.json scripts section...
```
"scripts": {
	"build": "webpack",
	"test": "jest",
	"start": "sam local start-lambda"
}
```

9. Add the template.yaml and event.json from this repo to the root for deployment and testing.


## That's it. 
### At this point you should have a running and deployable Lambda that looks just like the one in this repo.
