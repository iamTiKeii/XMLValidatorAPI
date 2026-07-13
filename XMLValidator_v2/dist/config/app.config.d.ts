export interface AppConfig {
    port: number;
    nodeEnv: string;
    apiKey: string;
}
export declare const appConfig: () => AppConfig;
