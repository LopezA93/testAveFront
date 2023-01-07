import ItemCard from "./Item";
import { useState } from "react";
const SearchFilter = ({ data }) => {
  const [localBook, setLocalBook] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );

  const favItem = (item) => {
    let existente = localBook.find((i) => i.id === item.id);
    if (!existente) {
      setLocalBook((localBook) => [...localBook, item]);
      localStorage.setItem("books", JSON.stringify([...localBook, item]));
      return;
    }
  };

  const classFavorito = (item) => {
    const filter = localBook.find((book) => book.id === item.id);
    if (filter) {
      return "favIcon";
    } else {
      return 'kaki';
    }
  };

  const filter = data.map((book) => (
    <ItemCard
      key={book.id}
      props={book}
      fav={() => favItem(book)}
      classFav={classFavorito(book)}
    />
  ));
  return filter;
};

export default SearchFilter;
