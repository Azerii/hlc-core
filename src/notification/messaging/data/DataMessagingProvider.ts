import {MessagingProvider} from '../../index';
import {FirebaseDataMessagingProvider} from '../firebase/FirebaseMessagingProvider';
import logger from '../../../server/logger';

class DataMessagingProvider implements MessagingProvider {
    public dataMessenger: FirebaseDataMessagingProvider;
    constructor() {
        this.dataMessenger = new FirebaseDataMessagingProvider()
    }
    async sendNotification(recipients: string[], templateVariables: {}): Promise<string | undefined> {
        let res;

        try {
            res = await this.send(templateVariables, recipients);
            logger.info('info: ' + res);
            
            return res;
        } catch (e) {
            logger.error(e);
        }
    }

    private async send(data: {[key: string]: string}, recipients: string[]): Promise<any> {
        const recipientCount = recipients.length;
        let messageOptions;
        let res;

        if (recipientCount === 1) {

            messageOptions = {
                data: data,
                token: recipients.toString()
            }

            res = await this.dataMessenger.sendToOne(messageOptions);

        } else if (recipientCount > 1) {

            messageOptions = {
                data: data,
                tokens: recipients
            }

            res = await this.dataMessenger.sendToMultiple(messageOptions);
        }

        return res;
    }
 }

export default DataMessagingProvider;
