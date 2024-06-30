document.addEventListener('DOMContentLoaded',()=>{

    const api="https://www.omdbapi.com/?apikey=e061ebe7&t=";
    const searchButton=document.getElementById('search-button-id');

    searchButton.addEventListener('click',()=>{

        const movieName=document.getElementById('search-box');
        const query=api+movieName.value;
        const movieTitle=document.getElementById('movie-title');
        const releaseYear=document.getElementById('released-in');
        const ratedAs=document.getElementById('rated');
        const movieRuntime=document.getElementById('runtime');
        const movieImdbRating=document.getElementById('imdb-rating');
        const moviePlot=document.getElementById('movie-plot-id');
        const movieDirector=document.getElementById('director');
        const movieWriters=document.getElementById('writers');
        const movieActors=document.getElementById('actors');
        const moviePoster=document.getElementById('poster-image-id');

        fetch(query).then((data)=>{
            return data.json();
        }).then((data)=>{
            movieTitle.innerText=data.Title;
            releaseYear.innerText=data.Year;
            ratedAs.innerText=data.Rated;
            releaseYear.innerText=data.Year;
            movieRuntime.innerText=data.Runtime;
            movieImdbRating.innerText=data.imdbRating+"/10";
            moviePlot.innerText=data.Plot;
            movieDirector.innerText=data.Director;
            movieWriters.innerText=data.Writer;
            movieActors.innerText=data.Actors;
            moviePoster.src=data.Poster;
        });
    });

});