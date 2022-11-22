import books from "../data/books/fantasy.json";

function BookCards() {
  return books.map((book) => (
    <div className="bookCards my-3">
      <img
        className="bookCovers"
        src={book.img}
        alt="book cover"
        key={book.asin}
      />
      <div className="bookInfo">
        <div className="bookTitle">{book.title}</div>
        <div className="bookPrice">${book.price}</div>
      </div>
    </div>
  ));
}

export default BookCards;
