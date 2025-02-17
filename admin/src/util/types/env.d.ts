

declare global{
    namespace NodeJS{
        interface ProcessEnv{
                BROWSER:'chrome'|'firefox'|'webkit'|'msedge';
                ENV:'staging'|'prod'|'test';
                BASEURL:string;
                HEAD: true|false
        }
    }
}

export{}