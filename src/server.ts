import mongoose from 'mongoose'
import app from './app'
import config from './config'
async function main() {
  try {
    await mongoose.connect(config.databseUrl as string)
    console.log('Database connecred! ')
    app.listen(config.port, () => {
      console.log(`Example app listenin on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
main()
