// const searchInput = document.getElementById('search-input');

// const searchButton = document.getElementById('search-button');
// const searchResult = document.getElementById('search-result');

//  searchButton.addEventListener('click',function(){
//     const searchText = searchInput.value;
//      const url = `https://openlibrary.org/search.json?q=${searchText}`;

//      fetch(url)
//      .then((res) => res.json())
//      .then((data) => {
//          data.forEach((book) => {
//             console.log(book.docs.name);
//             const div = document.createElement('div');
//                 div.classList.add('col-md-3');
//                  div.innerHTML = `
//                     <div class="card h-100">
//                             <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50" alt="">
//                         <div class="card-body">
//                             <h5 class="card-title" >Book Title: ${book.title}</h5>
//                              <h6 class="card-text"> Author name: ${book.author_name}</h6>
//                              <p class="card-text"> Publisher Name: ${book.publisher[0]}</p>
//                             <p class="card-text"> Publish Date: ${book.publish_date[0]}</p>
                                          
//                         </div>
//                     </div>`;
//                     searchResult.appendChild(div);
               
//          });
//      });
//  });




















const errorDiv = document.getElementById('error');

const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    if(searchText === ''){
       errorDiv.innerText = 'search field cannot be empty';
    }


//    clear input field
    searchInput.value = '';

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = books => {
    // if(book.docs){
    //     errorDiv.innerText = "";
    // }
    // else{
    //     errorDiv.innerText = "No result found";
    // }
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    errorDiv.innerText = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card h-100">
                  <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="">
                  <div class="card-body">
                      <h5 class="card-title" >Book Title: ${book.title}</h5>
                      <h6 class="card-text"> Author name: ${book.author_name}</h6>
                      <p class="card-text"> Publisher Name: ${book.publisher[0]}</p>
                      <p class="card-text"> Publish Date: ${book.publish_date[0]}</p>
                      
                  </div>
              </div>
        `;
        searchResult.appendChild(div);
    })

}

