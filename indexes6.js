// console.log("es6 version");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        console.log("adding");
        let tableBody = document.getElementById("tableBody");
        let uiString = ` <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryform = document.getElementById('libraryform');
        libraryform.reset();
    }
    validate(book) {
        if (book.name.length > 2 && book.author.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }
    show(type, message) {
        let msg = document.getElementById('msg');
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message!</strong> ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        setTimeout(function () {
            msg.innerHTML = '';
        }, 2000);
    }
}

let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformSubmit);

function libraryformSubmit(e) {
    console.log("You have submited form.");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been successfully added');
    }
    else {
        display.show('danger', 'sorry you can not add this book,please enter more characters');
    }

    e.preventDefault();
}