import { Container, Box, Grid } from "@mui/material";

import data from "../../services/books.json";
import SearchBar from "../Navbar/SearchBar";
import ItemCard from "./Item";
const ItemListContainer = () => {
  return (
    <Container>
      <h1> Listado Productos Prueba Tecnica AVE </h1>
      <SearchBar data={data} />{" "}
    </Container>
  );
};
export default ItemListContainer;
