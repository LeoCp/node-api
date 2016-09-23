describe('Routes Books', () =>{
  const defaultBook = {
    id:1,
    name:'Default Book'
  };
  describe("Routes GET /books", () =>{
    it("Lista de livros", done =>{
      request.get('/books').end((err,res)=>{
        expect(res.body[0].id).to.be.eql(defaultBook.id);
        expect(res.body[0].name).to.be.eql(defaultBook.name);
        done(err);
      });
    });
  });
});
