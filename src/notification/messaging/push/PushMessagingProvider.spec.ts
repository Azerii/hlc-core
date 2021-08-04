import PushMessagingProvider from './PushMessagingProvider';

const mockSendNotification = jest.fn();
jest.mock('./PushMessagingProvider', () => {
  return jest.fn().mockImplementation(() => {
    return {sendNotification: mockSendNotification};
  });
});

beforeEach(() => {
    mockSendNotification.mockClear();
})

test('check if PushMessagingProvider constructor was called', () => {
    const pushMessenger = new PushMessagingProvider();

    expect(PushMessagingProvider).toHaveBeenCalledTimes(1);
});

test('check if the sendNotification method in PushMessagingProvider was called', () => {
    const pushMessenger = new PushMessagingProvider();
    const token = 'cNzWYRE5G0Li6ey5TYUO8Y:APA91bGGjzGTGBP_dDEHFIvENVtgO5QS0T83rnr3gF8pRrf3rnFXGt0h4uV19ahHcu-zn31OZeI5EiR_uOpa3zfBmcaZvkhKd0ANSve3ZEWETftYZjRcVpUJq9QbtRFLiuByiJOuu6R5'
    pushMessenger.sendNotification([token], {first_name: 'Alan', channel_id: 1001}, 'reminder')

    expect(mockSendNotification).toHaveBeenCalledWith([token], {first_name: 'Alan', channel_id: 1001}, 'reminder')
    expect(mockSendNotification).toHaveBeenCalledTimes(1);
});