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