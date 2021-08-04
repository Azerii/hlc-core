import DataMessagingProvider from './DataMessagingProvider';

const mockSendNotification = jest.fn();
jest.mock('./DataMessagingProvider', () => {
  return jest.fn().mockImplementation(() => {
    return {sendNotification: mockSendNotification};
  });
});

beforeEach(() => {
    mockSendNotification.mockClear();
})

test('check if DataMessagingProvider constructor was called', () => {
    const dataMessenger = new DataMessagingProvider();

    expect(DataMessagingProvider).toHaveBeenCalledTimes(1);
});

test('check if the sendNotification method in DataMessagingProvider was called', () => {
    const dataMessenger = new DataMessagingProvider();
    const token = 'cNzWYRE5G0Li6ey5TYUO8Y:APA91bGGjzGTGBP_dDEHFIvENVtgO5QS0T83rnr3gF8pRrf3rnFXGt0h4uV19ahHcu-zn31OZeI5EiR_uOpa3zfBmcaZvkhKd0ANSve3ZEWETftYZjRcVpUJq9QbtRFLiuByiJOuu6R5'
    dataMessenger.sendNotification([token], {topic: 'Alan', message0: 'This is hlc'})
    
    expect(mockSendNotification).toHaveBeenCalledWith([token], {topic: 'Alan', message0: 'This is hlc'})
    expect(mockSendNotification).toHaveBeenCalledTimes(1);
});