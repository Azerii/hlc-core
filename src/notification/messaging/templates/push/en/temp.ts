export interface PushMessage {
    title: string
    body: string
    android_channel_id?: string
}

interface TemplateMap {
    [key: string]: PushMessage
}

const pushTemp: TemplateMap = {
    'reminder': {
        title: 'Reminder',
        body: 'Greetings {{first_name}}! Great work so far.',
        android_channel_id: '{{channel_id}}'
    }
}

export default pushTemp;