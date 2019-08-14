describe('Endpoints', () => {
  describe('posts', () => {
    /* for ejecute one test change word it.skip for only it.only*/
    it('should create', () => {
      const mockUsers = [
          { id: 1 },
          { id: 2 },
       ]
     /* pass parameters in body method post */   
       const post = {
           userId: 1,
           id:1,
           title: "title",
           body: "body post "
       }
       const req = {
           body:post,
       }
       const res = {
           status: jest.fn(),
           send: jest.fn()
       }
       const axios = {
           get: jest.fn().mockResolvedValue({ data:mockUsers }),
           post: jest.fn(),
       }
    });
  });
});
