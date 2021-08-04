import EmailMessagingProvider from './messaging/email/EmailMessagingProvider';
import PushMessagingProvider from './messaging/push/PushMessagingProvider';
import DataMessagingProvider from './messaging/data/DataMessagingProvider'

export interface MessagingProvider {
    sendNotification(recipient: string[], templateVariables: object, templateKey?: string): any
}

const getProvider = (messageType: string) =>  {
    let provider: MessagingProvider;
    switch (messageType) {
        case 'email':
            provider = new EmailMessagingProvider()
            break;
        case 'push':
            provider = new PushMessagingProvider()
            break;
        case 'data':
            provider = new DataMessagingProvider()
    
        default:
            throw new Error("Must specify a message type");
    }
    return provider
}

export default getProvider;
