import express from 'express'
import config from  './config/index'
import loaders from "./loaders/index";

const app:express.Application = express()
loaders(app)

const server = app.listen(config.server_port,()=>{
    console.log(`Server listening on port: ${config.server_port}`)
}) .on('error', (err) => {
    console.log(`${config.server_port} server error: ${err}`)
})
export default { server }