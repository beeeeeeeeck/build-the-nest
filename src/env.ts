/**
 * This has to be placed in the beginning of the server start up so that
 * we can make sure the local environment variables are loaded before all the modules
 */

import dotenv from 'dotenv'

dotenv.config()
