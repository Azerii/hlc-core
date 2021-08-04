import NodemailerMessagingProvider from '../nodemailer/NodemailerMessagingProvider';
import {MessagingProvider} from '../../index';
import logger from '../../../server/logger';
import fs from 'fs';
import {promisify} from 'util';
import Handlebars from 'handlebars'

const readFile = promisify(fs.readFile);



interface MessageOptions {
    from: string
    to: string
    subject: string
    text?: string
    html: string
}


class EmailMessagingProvider implements MessagingProvider {
    private mailer: NodemailerMessagingProvider;
    constructor() {
        this.mailer = new NodemailerMessagingProvider();
    }

    async sendNotification(recipients: string[], templateVariables: object, templateKey: string): Promise<string | undefined> {
        const template = await this.retrieveTemplate(templateKey); // retrieve html and text templates
        const html = this.renderVariablesToTemplate(template.html, templateVariables); // render variables to html template
        const text = this.renderVariablesToTemplate(template.text ,templateVariables); // render variables to text template
        
        let res: string | undefined;

        try {
            res = await this.send(recipients, templateKey, html, text);
            logger.info('info: ' + res)
            return res;
        } catch (e) {
            logger.error(e);
        }
    }

    private renderVariablesToTemplate(template: string, templateVariables: object): string {
        const temp: HandlebarsTemplateDelegate<any> = Handlebars.compile(template);
        const rendered_temp: string = temp(templateVariables);

        return rendered_temp;
    }

    private async retrieveTemplate(key: string): Promise<{html: string, text: string}> {
        let htmlContent: string;
        let textContent: string;
        
        try {
            htmlContent = await readFile(`/Users/user/Documents/odi/health-lifestyle-core/src/notification/messaging/templates/emails/${key}/en/${key}.html`, 'utf8');
            textContent = await readFile(`/Users/user/Documents/odi/health-lifestyle-core/src/notification/messaging/templates/emails/${key}/en/${key}.txt`, 'utf8');

            
        } catch (e) {
            logger.error(e);
        }
                
        return {html: htmlContent!, text: textContent!};
        
            
        
    }

    private async send(recipients: string[], templateKey: string, html: string, text: string): Promise<string | undefined> {
        let subject: string = '';
        switch (templateKey) {
            case 'verify_email':
                subject = 'Email Verification'
                break;
        
            default:
                break;
        } 

        const messageOptions: MessageOptions = {
            from: 'Health-lfestyle-core <hlc_noreply@yopmail.com>',
            to: recipients.toString(),
            subject: subject,
            text: text,
            html: html,
        }

        let res;

        try {
            res = await this.mailer.send(messageOptions);
            logger.info(res!)
            return res;
        } catch (e) {
            logger.error('Error: ' + e)
        }

        
    }
 }

export default EmailMessagingProvider;