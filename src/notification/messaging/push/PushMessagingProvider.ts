import {MessagingProvider} from '../../index';
import {FirebasePushMessagingProvider} from '../firebase/FirebaseMessagingProvider';
import pushTemp, {PushMessage} from '../templates/push/en/temp';
import Handlebars from 'handlebars'
import logger from '../../../server/logger';

class PushMessagingProvider implements MessagingProvider {
    public pushMessenger: FirebasePushMessagingProvider;
    constructor() {
        this.pushMessenger = new FirebasePushMessagingProvider()
    }
    async sendNotification(recipients: string[], templateVariables: {}, templateKey: string): Promise<string | undefined> {
        const template = this.retrieveTemplate(templateKey);
        const notification = JSON.parse(this.renderVariablesToTemplate(template, templateVariables));
        let res;

        try {
            res = await this.send(notification, recipients);
            logger.info('info: ' + res)
            
            return res;
        } catch (e) {
            logger.error(e);
        }
    }

    private retrieveTemplate(key: string): string {
        const template: PushMessage = pushTemp[key]
        const templateStr = JSON.stringify(template)

        return templateStr;
    }

    private renderVariablesToTemplate(template: string, templateVariables: object): string {
        const temp: HandlebarsTemplateDelegate<any> = Handlebars.compile(template);
        const rendered_temp: string = temp(templateVariables);

        return rendered_temp;
    }

    private async send(notification: object, recipients: string[]): Promise<any> {
        const recipientCount = recipients.length;
        let messageOptions;
        let res;

        if (recipientCount === 1) {

            messageOptions = {
                notification: notification,
                token: recipients.toString()
            }

            res = await this.pushMessenger.sendToOne(messageOptions)

        } else if (recipientCount > 1) {

            messageOptions = {
                notification: notification,
                tokens: recipients
            }

            res = await this.pushMessenger.sendToMultiple(messageOptions)
        }

        return res;
    }
 }

export default PushMessagingProvider;
