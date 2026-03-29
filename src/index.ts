import { Elysia } from 'elysia';

new Elysia()
  .get('/', () => 'Hello World')
  .listen({ port: 3000, hostname: '0.0.0.0' });
