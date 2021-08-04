import * as admin from 'firebase-admin'
import { TokenMessage } from 'firebase-admin/lib/messaging';
import logger from '../../../server/logger';

const app: admin.app.App = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

export class FirebasePushMessagingProvider {
    private messaging: admin.messaging.Messaging;

    constructor() {
        this.messaging = app.messaging();
    }

    // sends message to a client with the corresponding registration token
    async sendToOne(messageOptions: TokenMessage): Promise<string | undefined> {
        const message: TokenMessage = messageOptions
        let res;
        try {
            res = await this.messaging.send(message, true)
            // successful response is a message ID string.
            logger.info('info' + res)
        } catch (e) {
            logger.error('Error sending push message:' + e)
        }

        return res;
    }

    // sends message to clients with the corresponding registration tokens
    async sendToMultiple(messageOptions: admin.messaging.MulticastMessage): Promise<admin.messaging.BatchResponse | undefined> {
       const message: admin.messaging.MulticastMessage = messageOptions;
       let recipients: string[] = messageOptions.tokens;
       let res;
        try {
            res = await this.messaging.sendMulticast(message, true)
            // successful response is a message ID string.
            if (res.failureCount > 0) {
                const failedTokens: string[] = [];
                res.responses.forEach((resp, idx) => {
                  if (!resp.success) {
                    failedTokens.push(recipients[idx]);
                  }
                });
                logger.error('List of tokens that caused failures: ' + failedTokens);
            } else {
                logger.info(res.successCount + ' push messages were sent successfully');
            }
        } catch (e) {
            logger.error('Error sending push message:' + e)
        }

        return res;
    }


}

// tslint:disable-next-line:max-classes-per-file
export class FirebaseDataMessagingProvider {
    private messaging: admin.messaging.Messaging;

    constructor() {
        this.messaging = app.messaging();
    }

    // sends message to a client with the corresponding registration token
    async sendToOne(messageOptions: TokenMessage): Promise<string | undefined> {
        const message: TokenMessage = messageOptions;
        let res;
        try {
            res = await this.messaging.send(message);
            // successful response is a message ID string.
            logger.info('Successfully sent data message:' + res)
        } catch (e) {
            logger.error('Error sending data message:' + e)
        }

        return res;
    }

    // sends message to clients with the corresponding registration tokens
    async sendToMultiple(messageOptions: admin.messaging.MulticastMessage): Promise<admin.messaging.BatchResponse | undefined> {
       const message: admin.messaging.MulticastMessage = messageOptions;
       let recipients: string[] = messageOptions.tokens;
       let res;
        try {
            res = await this.messaging.sendMulticast(message);
            // successful response is a message ID string.
            logger.info('Successfully sent message:' + res);
            if (res.failureCount > 0) {
                const failedTokens: string[] = [];
                res.responses.forEach((resp, idx) => {
                  if (!resp.success) {
                    failedTokens.push(recipients[idx]);
                  }
                });
                logger.error('List of tokens that caused failures: ' + failedTokens);
            } else {
                logger.info(res.successCount + ' data messages were sent successfully');
            }
        } catch (e) {
            logger.error('Error sending data message:' + e)
        }

        return res;
    }

}

