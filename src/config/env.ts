import * as dotenv from "dotenv"
import * as fs from "fs"

export const initEnv = () => {
  const envFilePathName = `.env.${process.env.MODE}`
  console.log("envFilePathName", envFilePathName, process.env.MODE)
  if (fs.existsSync(envFilePathName)) {
    dotenv.config({ path: envFilePathName })
  } else {
    process.exit(1)
  }
}
