import "./App.css";
import Book from "./components/Book";

function App() {
  const books = [
    {
      id: 1,
      nazev: "Harry Potter a Kámen mudrců",
      popisek: "Popisek k Harrymu Potterovi číslo jedna.",
      obrazek:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
    },
    {
      id: 2,
      nazev: "Harry Potter a Tajemná komnata",
      popisek:
        "Popisek k Harrymu Potterovi číslo dvě, který bude o kousek delší.",
      obrazek:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
    },
    {
      id: 3,
      nazev: "Harry Potter a Vězeň z Azkabanu",
      popisek: "Harry Potter a Vězeň z Azkabanu je mou nejoblíbenější knihou, protože je velice napínavá.",
      obrazek:
        "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
    },
  ];

  return (
    <div>
      <h1 className="main-heading">Prodej knih</h1>
      <div className="books">
        <Book mujnadpis={books[0].nazev} mujpopisek={books[0].popisek} mujobr={books[0].obrazek}></Book>
        <Book mujnadpis={books[1].nazev} mujpopisek={books[1].popisek} mujobr={books[1].obrazek}></Book>
        <Book mujnadpis={books[2].nazev} mujpopisek={books[2].popisek} mujobr={books[2].obrazek}></Book>
      </div>
    </div>
  );
}

export default App;
