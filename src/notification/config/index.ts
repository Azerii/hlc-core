import dotEnv from "dotenv";
import path from "path";

const pathConfig = {path: process.env.NODE_ENV ? path.join(__dirname, `../../../.env.${process.env.NODE_ENV}`) : undefined};

dotEnv.config({
    ...pathConfig
});

interface TransporterConfiguration {
  service?: string,
  host?: string,
  port: any,
  secure?: boolean,
  security?: string,
  ignoreTLS?: boolean,
  requireTLS?: boolean, 
  auth: {
    user?: string, 
    pass?: string, 
  },
}

interface NotificationConfiguration {
  mailer: TransporterConfiguration,
}


export const config: NotificationConfiguration = {
  mailer: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    },
  },
  
}



