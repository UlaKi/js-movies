const renderMovie = (movie) => {
    let element = document.createElement('div');
    const image ="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
    element.className = 'col-12';
    element.innerHTML = `
<div class="title-wraper">
<div> Plakatas: <br> <img src="${movie.Poster!=='N/A'?movie.Poster:image}"/></div>
<div> Trukmė: ${movie.Runtime}</div>
<div> Režisierius: ${movie.Director}</div>
<div> Aktoriai: ${movie.Actors}</div>
<div> IMDB reitingas: ${movie.imdbRating}</div>
</div>
`;
    return element;
}
export default renderMovie