const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch(`http://localhost:3000/movies ${input.value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
        let tittle = document.querySelector('section#movieDetails h4')
        let summary = document.querySelector('sectionmovieDetails p')
        tittle.innerText= data.tittle;
        summary.innerText = data.summary;
      });
      return data;
    });
}
  document.addEventListener('DOMContentLoaded', init);


