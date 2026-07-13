export interface AppConfig {
  port: number;
  nodeEnv: string;
  apiKey: string;
}

export const appConfig = (): AppConfig => ({
  port: parseInt(process.env.PORT || '5038', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY || 'txfzStTinEm1nJerM4i9MhqUVWP66N188FHrtxnMrFfpwtKje16mvASVTbgfSW0vh5tPFYr8CBRu350fkWHuSEKzizWk65dA0buKzz9NuG1ujkumj08DEzNGYk4Luk1Z',
});
