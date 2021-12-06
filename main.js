const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const errorDiv = document.getElementById('error');
const resultNumber = document.getElementById('result-number');

const searchBook = () => {
    const searchText = searchInput.value;
    //    clear input field
    searchInput.value = '';

    if (searchText === "") {
        errorDiv.innerText = "Please Write something to search."
        searchResult.textContent = "";
    } else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
    }


}
//  function for displaying book
const displaySearchResult = books => {

    // function for number of results
    const showResultNumber = () => {
        resultNumber.innerText = books.length + ' results found';
    };
    resultNumber.innerText = "";

    // error handling
    if (books.length === 0) {
        errorDiv.innerText = "";
        errorDiv.innerText = 'No result found';
    }
    else {
        errorDiv.innerText = "";
        showResultNumber();
    }

    //  clear previous results
    searchResult.textContent = "";

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
             <div class="card h-100">
                  <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="">
                 <div class="card-body">
                      <h5 class="card-title" >Book Title: ${book.title}</h5>
                      <p class="card-text"> Author name: ${book.author_name}</p>
                      <p class="card-text"> Publisher Name: ${book.publisher}</p>
                      <p class="card-text"> Publish Year: ${book.first_publish_year}</p>
                      
                  </div>
              </div> `;
        searchResult.appendChild(div);
    });

};

