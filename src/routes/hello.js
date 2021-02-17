const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' },
                }
            }
        }
    }
}

export default async function(app) {
    app.get('/hello', opts, async function(req, reply) {
        return { hello: 'world' }
    })
}