declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly MODE: 'dev' | 'stage' | 'prod'
      readonly PORT: string
      readonly SECRET_KEY: string
      readonly HOST_MONGO_URL: string
    }
  }
}

export {}
