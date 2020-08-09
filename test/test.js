const expect = require("chai").expect;
const movies = require("../data");

// describe("movies module", () => {
 it("returns requested movies", () => {
   const result = movies.getmovies("sergio");
   expect(result).to.deep.equal({title: "sergio", director:"Greg Moura", type:"action", year:2019});
 });
 
 it("fails w/ invalid movies", () => {
   const result =movies.getmovies("fake");
   expect(result).to.be.undefined;
 });



// describe("movies module", () => {
 it("delete movies", () => {
   const result = movies.delete("sergio");
   expect(result.deleted).to.be.true
 });
 
 it("fails w/ invalid movies", () => {
   const result =movies.delete("fake");
   expect(result.deleted).to.be.false;
 });

//   describe("movies module", () => {
  it("add movie", () => {
    const result = movies.add("Ever After");
    expect(result.added).to.be.true
  });
 // {title: "sergio", director:"Greg Moura", type:"action", year:2019},
  it("fails w/ invalid movies", () => {
    const result =movies.add("fake");
    expect(result.added).to.be.false;
  });
