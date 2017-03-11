var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  document.getElementById("demo").innerHTML = movieList.title;
  return movieList.title;
}
function findByTitle( title ){
 var found = [];
    var f = 0;
 for (var i = 0; i < movieList.length; i++){
         if (movieList[i].title.search(title) != -1){
              found[f] = movieList[i];
              f++;
            }
          }
          return JSON.stringify(found);
        }
        console.log(findByTitle("Matrix"));

function addMovie( movie ){
  var newMovie = {"Passengers", "2017", 152, '9.0', 'thriller'};
}

var newMovie = {};
console.log(addMovie(newMovie));

function movieByRating(){

  var arr =[], visit=[];
  for (var i = 0; i < movieList.length; i++) {
    arr.push(parseFloat(movieList[i].rating));
    visit.push(false);
}
arr.sort();
 for (var i = 0; i < arr.length; i++)
 {
  for (var j = 0; j < movieList.length; j++)
   {
    if (arr[i] == parseFloat(movieList[j].rating) && visit[j] == false) // 
     {
      visit[j] = true; 

console.log(movieByRating());
}
}

function findByTitle( title ){

  document.getElementById("demo").innerHTML = movieList.title;
  return movieList.title;
  function findByTitle( title ){
    var found = [];
    var f = 0;
    for (var i = 0; i < movieList.length; i++){
      if (movieList[i].title.search(title) != -1){
        found[f] = movieList[i];
         f++;
}
}
return JSON.stringify(found);
console.log(findByTitle("matrix"));
