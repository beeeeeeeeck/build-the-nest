import './env' // make sure this is the first line so that ENV variables are loaded properly

import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

function normalizePort(val: string) {
    const port = parseInt(val, 10)
    if (Number.isNaN(port) || port <= 0) {
        throw new Error('Incorrect server port number')
    }
    return port
}

async function startup() {
    const app = await NestFactory.create(AppModule)
    const port = normalizePort(process.env.PORT ?? '8080')
    await app.listen(port)
}

startup()
