const axios = {
    post: jest.fn().mockResolvedValue({ data: { token: 'fakeToken', userId: 'fakeUserId' } }),
  };
  
  export default axios;