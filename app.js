const bookshelf = document.querySelector('.library-container')
const btn = document.querySelector('.btn')
const dialog = document.querySelector('dialog')
const addBook = document.querySelector('.continue')
const cancel = document.querySelector('.cancel')
const form = document.querySelector('.form')

const myLibrary = [];

//author, title, number of pages, and has been read or not 
function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}


function displayBook() {
    //last obj of myLibrary
    const lastBook = myLibrary[myLibrary.length - 1]
    bookshelf.innerHTML += `<div data-id ="${lastBook.id}" class="book-contents">

                            <h3 class="book-title">Book Title: ${lastBook.title}</h3>
                            <p class="book-author">Book Author: ${lastBook.author}</p>
                            <p class="total-pages">Pages: ${lastBook.pages}</p>
                            <p class="read-status">${lastBook.read}</p>
                            <div class="book-btn-container">
                            <button class = "remove" data-id = "${lastBook.id}">Remove</button>
                            <button class="read">Read</button>
                            </div>
                            
                         </div>`
    console.log(lastBook)
    document.querySelector('.title').value = ""
    document.querySelector('.author').value = ""
    document.querySelector('.pages').value = ""

    const remove = document.querySelectorAll('.remove')
    const allBookContents = document.querySelectorAll('.book-contents')
    remove.forEach(r => {
        r.addEventListener('click', () => {
            for (let b of allBookContents) {
                if (b.dataset.id === r.dataset.id) {
                    b.remove()
                }
            }
         
            
       })
   })
    //toggle read state
    // const 
}

btn.addEventListener('click',displayModal)
cancel.addEventListener('click', removeModal)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let newTitle = document.querySelector('.title').value
    let newAuthor = document.querySelector('.author').value
    let newPages = document.querySelector('.pages').value
    let checkBox = document.querySelector('.read').checked

    let hasRead 
    
    checkBox? hasRead = "Read Book" : hasRead = "Not Read Book"

  
    const book = new Book(newTitle, newAuthor, newPages,hasRead)
    myLibrary.push(book)
    displayBook()
    dialog.close()
})

function displayModal() {
    dialog.showModal()
    
}

function removeModal() {
    
    document.querySelector('.title').value = ""
    document.querySelector('.author').value = ""
    document.querySelector('.pages').value = ""
    dialog.close()
}

