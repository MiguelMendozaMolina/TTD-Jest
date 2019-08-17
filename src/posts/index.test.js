const request = require('supertest')
const app = require('../../index')



describe('Server',() => {
    describe('Endpoints:', () => {
        describe('Post POST', () => {
            it('creates a new post', async () =>{
                const response = await request(app)
                .post("/") /* url */
                .send({ userId: 5 }) /* values */
                .set("user_id",1) /* headers */
                .set("Content-Type", "application/json");
              expect(response.statusCode).toEqual(201);
              expect(response.body.userId).toEqual(5)
              expect(response.body).toHaveProperty('id')
            })
            it('does not creates a new post', async () =>{
                const response = await request(app)
                .post("/") /* url */
                .send({ userId: 100 }) /* values */
                .set("user_id",1) /* headers */
                .set("Content-Type", "application/json");
              expect(response.statusCode).toEqual(500);
            })
        })
    })
})