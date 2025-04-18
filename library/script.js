const myLibrary = [];

function Book(name, author, pages, read) {
    if(!new.target){
        throw new Error("Use 'new' keyword");
    } else{
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }
}

Book.prototype.getValue = function(property) {
    let entries = Object.entries(this);
    for (let pair in entries) {
        if(entries[pair][0] == property) return entries[pair][1];
    }
}

function getValue (obj, property){
    let entries = Object.entries(obj);
    for (let pair in entries) {
        if(entries[pair][0] == property) return entries[pair][1];
    }
}

function addBookToLibrary([name, author, pages ,read]){
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

function displayCards() {
    reset();
    for (let book in myLibrary) {
        const container = document.querySelector("#container");
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', myLibrary[book].getValue('id'))
                const cover = document.createElement('div');
                cover.classList.add('cover');
                        const title = document.createElement('p');
                        title.classList.add('title');
                        title.textContent = myLibrary[book].getValue('name');
                    cover.appendChild(title);
                        const author = document.createElement('p');
                        author.setAttribute('class', 'author')
                        author.textContent = myLibrary[book].getValue('author');
                    cover.appendChild( author);
                card.appendChild(cover);
                const info = document.createElement('div');
                info.classList.add('info');
                    const pages = document.createElement('span');
                    pages.textContent = 'Pages: ' + myLibrary[book].getValue('pages');
                    pages.setAttribute('class', 'pages')
                    info.appendChild(pages);
                    const read = document.createElement('button');
                    if(myLibrary[book].read) {
                        read.style.backgroundColor= 'var(--read)';
                    } else {
                        read.style.backgroundColor= 'var(--not-read)';
                    }
                    read.setAttribute('class', 'read');
                    read.setAttribute('data-id', myLibrary[book].getValue('id'));
                    info.appendChild(read);
                    const removeBtn = document.createElement('button');
                    removeBtn.textContent = 'delete';
                    removeBtn.setAttribute('class', 'remove-btn material-icons');
                    removeBtn.setAttribute('data-id', myLibrary[book].getValue('id'));
                info.appendChild(removeBtn);
            card.appendChild(info);
        container.appendChild(card);

    }
    btnEventListener();
}

function btnEventListener(){  
    const buttons = document.querySelectorAll('[class = "remove-btn material-icons"], [class= "read"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList[0]== 'remove-btn'){
                removeBook(button);

            } else {
                doFlip(button);
            }
        });
    });
} 

function reset() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(el => el.remove());
}

function doFlip(button) {
    let id = button.dataset.id;
    const cards = getCards();
    for (let card in cards) {
        if(cards.hasOwnProperty(card)){
            if(id===cards[card].dataset.id){
                for (let book in myLibrary){
                    if(id==myLibrary[book].id){
                        if(myLibrary[book].read){
                            myLibrary[book].read = false;
                            button.style.backgroundColor= 'var(--not-read)';
                        } else {
                            myLibrary[book].read = true;
                            button.style.backgroundColor= 'var(--read)';
                        }
                    }
                }    
            }
        }
    }
}

function removeBook (button) {
    let id = button.dataset.id;
    const cards = getCards();
    for (let card in cards) {
        if(cards.hasOwnProperty(card)){
            if(id==cards[card].dataset.id){
                for (let book in myLibrary){
                    if(id==myLibrary[book].id){
                        myLibrary.splice(book, 1);
                        displayCards();
                    }
                }    
            }
        }
    }
}

function getCards (){
    const cards= document.querySelectorAll('.card');
    return cards;
}


addBookToLibrary(["1984", "George orwell", 156, false]);
addBookToLibrary(["The Hobbit", "J.R.R. tolkein", 385, true]);
addBookToLibrary(["1984", "George orwell", 156, false]);
addBookToLibrary(["The Hobbit", "J.R.R. tolkein", 385, true]);


displayCards();


const submit = document.querySelector('#submit');
const popup = document.querySelector('#form-popup')
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('#form');
    let book = [
        form.elements.name.value,
        form.elements.author.value,
        form.elements.pages.value,
        form.elements.read.checked,
    ];
    addBookToLibrary(book);
    displayCards();
    popup.classList.remove('active');
    } 
);

const createBook = document.querySelector('#fab');
createBook.addEventListener('click', () =>{
    popup.classList.add('active');
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    popup.classList.remove('active');
})
