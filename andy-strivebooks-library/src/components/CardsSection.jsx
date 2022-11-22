import books from "../data/books/fantasy.json";

function BookCards() {
  return (
    <div>
      <h2 className="mx-4 mt-3">{books[0].category} Books</h2>
      <div className="px-4 rowCards">
        {books.map((book) => (
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
        ))}
      </div>
    </div>
  );
}

export default BookCards;
