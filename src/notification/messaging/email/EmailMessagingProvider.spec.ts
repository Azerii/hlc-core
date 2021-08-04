import EmailMessagingProvider from './EmailMessagingProvider';

const mockSendNotification = jest.fn();
jest.mock('./EmailMessagingProvider', () => {
  return jest.fn().mockImplementation(() => {
    return {sendNotification: mockSendNotification};
  });
});

beforeEach(() => {
    mockSendNotification.mockClear();
})

test('check if EmailMessagingProvider constructor was called', () => {
    const mailer = new EmailMessagingProvider();

    expect(EmailMessagingProvider).toHaveBeenCalledTimes(1);
});

test('check if the sendNotification method in EmailMessagingProvider was called', () => {
    const mailer = new EmailMessagingProvider();
    mailer.sendNotification(['alanwalker@yopmail.com'], {first_name: 'Alan', email_address: 'alanwalker@yopmail.com'}, 'verify_email')
    
    expect(mockSendNotification).toHaveBeenCalledWith(['alanwalker@yopmail.com'], {first_name: 'Alan', email_address: 'alanwalker@yopmail.com'}, 'verify_email')
    expect(mockSendNotification).toHaveBeenCalledTimes(1);
});
