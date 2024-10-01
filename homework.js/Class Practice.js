class Author {
    constructor(fname, lname, country, [books]){
        this.fname = fname;
        this.lname = lname;
        this.country = country;
        [this.books] = [books];
    }
    getFullNmae(){
        return (`${this.fname} ${this.lname}`);
    }


}

class Book {

    constructor(title, genre, page){
    this.title= title;
    this.genre = genre;
    this.page = page;
}
}