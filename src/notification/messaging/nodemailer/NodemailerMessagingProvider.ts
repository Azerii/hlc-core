import nodemailer from 'nodemailer'
import {config} from '../../config'
// import { MessagingProvider, Message } from '../../index';
import logger from '../../../server/logger';
// import {EmailMessagingTemplate} from '../../templates'

interface MessageOptions {
    from: string,
    to: string,
    subject: string,
    text?: string,
    html: string
}

export interface SendMail {
    send(messageOptions: MessageOptions): Promise<string | undefined>
}

export default class NodemailerMessagingProvider implements SendMail {
    private readonly defaultConfig = {
        host: config.mailer.host,
        port: parseInt(config.mailer.port),
        auth: {
            user: config.mailer.auth.user, 
            pass: config.mailer.auth.pass, 
        },
    }
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport(this.defaultConfig)
        this.transporter.verify(function(error) {
            if (error) {
                logger.error('something went wrong: ' + JSON.stringify(error));
            } else {
                logger.info('Server is ready to take our messages');
            }
         });
    }

    async send(messageOptions: MessageOptions): Promise<string | undefined> {
        
        let info: nodemailer.SentMessageInfo;

        try {
            info = await this.transporter.sendMail(messageOptions)

            logger.info('Mail sent successfully: ' + JSON.stringify(info))
        } catch(e) {
            logger.error('Error sending mail: ' + e)
        }

        return JSON.stringify(info.accepted);
    }

}