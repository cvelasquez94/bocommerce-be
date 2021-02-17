import createApp from './app.js'
import dotenv from 'dotenv'
dotenv.config()

async function start() {
    try {
        const app = createApp({
            logger: true
        })
    
        await app.listen(process.env.PORT || 3000, '0.0.0.0')
    } catch (error) {
        console.log(error)
    }
} 
start()
