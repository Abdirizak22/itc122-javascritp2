//==============THIS IS  Week 2 ASSIGNMENT - Intro to Express==============

'use strict'

let movies = [
    {title: "sergio", director:"Greg Moura", type:"action", year:2019},
    {title: "catfish", director:"Honry Joost", type:"adventure",year:2020},
    {title: "the Queen", director:"Frank Simon",type:"romantic",year:2018},
    {title: "Erth and blood", director:"julien", type:"action", year:2019},
    {title: "The occupant", director:"Alex pastor", type:"scientific", year:2020},
];

exports.getAll = () => {
    return movies;
};

exports.getDetail = title => {
    const movie = movies.find(movies => movies.title === title);
    return movie;
}

//============== Week 2 ASSIGNMENT - End here ==============

//============== Week 3 ASSIGNMENT- Quality Assurance ==============

exports.getmovies = (title) => {
    return movies.find((movies) => {
      return movies.title === title;
    });
  }
exports.delete = (title) => {
    const oldLength = movies.length;
    movies = movies.filter((item) => {
        return item.title !== title;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: oldLength !== movies.length, total: movies.length };
};
exports.add = (newmovie) => {
  const oldLength = movies.length;
  // use existing get() method to check if movies already in our list
  let found = this.getmovies(newmovie.title);
  if (!found) {
      movies.push(newmovie);
  }
  // if old & new array lengths differ, item was added
  return {added: oldLength !== movies.length, total: movies.length };
};
