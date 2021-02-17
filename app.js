import fastify from 'fastify'
import autoload from 'fastify-autoload'
import { join } from 'desm'
import cors from 'fastify-cors'

export default function (opt) {
    const app = fastify(opt)
    app.register(cors)
    app.get('/ping', (req, reply) => {
        reply.send('pong')
    })
    app.register(autoload, {
        dir: join(import.meta.url, 'src/routes')
    })

    return app
}
