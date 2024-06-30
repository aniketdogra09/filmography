document.addEventListener('DOMContentLoaded',()=>{
    
    const api="https://www.omdbapi.com/?apikey=e061ebe7&t=";
    const searchButton=document.getElementById('search-button-id');

    searchButton.addEventListener('click',()=>{

        const movieName=document.getElementById('search-box');
        const query=api+movieName.value;
        const movieTitle=document.getElementById('movie-title');

        fetch(query).then((data)=>{
            return data.json();
        }).then((data)=>{
            movieTitle.innerText=data.Title;
        });
    });

});