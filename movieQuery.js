var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  return movielist[index].title
}

console.log(getMovieTitle(3));

function addMovie( string title,int year,int length,int rating,string genre){
  Movie tempMovie = new Movie(title,year,length,rating, genre);
       movieList.add(tempMovie);
       return true;
}

var newMovie = {};
console.log(addMovie(newMovie));

function movieByRating(string rating){
return movielist[index].rating;
}

console.log(movieByRating());

function findByTitle( title ){
this.title=title;
}

console.log(findByTitle("matrix"));
