import ajaxService from "./ajaxService";
import renderMovie from "./renderMovie";

const searchMovies = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        ajaxService(searchTerm)
            .then((result) => {
                console.log(result)
                if (result.Response !== 'False'){
                            document.querySelector('main .result').innerHTML = '<span></span>';
                            document.querySelector('main .result').appendChild(renderMovie(result))
                } else {
                    document.querySelector('main .result').innerHTML = '<div lang="lt" class="col">Filmas nerastas. Pasitikrinkite rašybą!</div>';
                }

            })
    })
}

export default searchMovies