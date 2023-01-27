import {config} from 'dotenv'
import path from "path";

const env_dir = `../env/.env.${process.env.NODE_ENV || 'development'}`
config({path: path.join(__dirname,env_dir)})



export const {PORT} = process.env
