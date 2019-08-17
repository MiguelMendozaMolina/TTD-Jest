const postHandlers = require("./index");

describe('Endpoints', () => {
  describe('posts', () => {
    /* for ejecute one test change word it.skip for only it.only*/
    it('should create', async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }];
      /* pass parameters in body method post */

      const post = {
        userId: 1,
        title: "title",
        body: "body post "
      };
      const req = {
        body: post
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } })
      };
      await postHandlers({ axios }).post(req, res);

      /* waiting for the answer status equal 201 */
      expect(res.status.mock.calls).toEqual([[201]]);

      /* waiting for the object to be sent to the user */
      expect(res.send.mock.calls).toEqual([[{ id: 1000 }]]);
      expec(axios.get.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users"]
      ]);
      expect(axios.post.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/posts", post]
      ]);
    });
    it("should not create if userId not exist", async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }];
      /* pass parameters in body method post */

      const post = {
        userId: 3,
        title: "title",
        body: "body post "
      };
      const req = {
        body: post
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        sendStatus: jest.fn()
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } })
      };
      await postHandlers({ axios }).post(req, res);
      expect(axios.post.mock.calls).toEqual([]);
      expect(res.sendStatus.mock.calls).toEqual([[500]]);
    });
  });
});
