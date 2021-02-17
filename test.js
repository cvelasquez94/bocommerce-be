import test from 'tape'
import Ajv from 'ajv'
import createApp from './app.js'


test('questions and answers', async (t) =>{
    const app = createApp()

    const res = await app.inject('/questionsAnswers')
    t.strictEqual(res.statusCode, 200)
    t.deepEqual(res.json().qa[0].question, '¿Cómo me adhiero como Comercio Amigo?')
    await app.close()
})
