const ajaxService = (t)=>{
    const url = `http://www.omdbapi.com/`
    const key = 'e4db3ced'
    return fetch(`${url}?t=${t}&apikey=${key}`)
        .then(response => response.json())
}
export default ajaxService