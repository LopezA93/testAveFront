import SearchFilter from "./SearchFilter";
import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";
// import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SearchBar = ({ data }) => {
  const [searchField, setSearchField] = useState("");
  const [item, setItem] = useState();

  const bookFilter = data.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const searchList = () => {
    return <SearchFilter data={bookFilter} />;
  };

  const nameFilter = () => {
    const filter = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
    });
    setItem(filter);
  };
  const lowPriceFilter = () => {
    const filter = data.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
    });

    setItem(filter);
  };
  const highPriceFilter = () => {
    const filter = data.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
    });

    setItem(filter);
  };

  useEffect(() => {
    setItem();
  }, [item]);

  return (
    <>
      <Grid container margin={2} spacing={2}>
        <Grid item md={4} sm={9} xs={8}>
          <Input
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search book"
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={2} sm={4} xs={5}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Order</InputLabel>
              <Select value={searchField} label="Order" onChange={handleChange}>
                <MenuItem value='' onClick={nameFilter}>
                  Nombre
                </MenuItem>
                <MenuItem value='' onClick={lowPriceFilter}>
                  Precio menor a mayor
                </MenuItem>
                <MenuItem value='' onClick={highPriceFilter}>
                  Precio mayor a menor
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={2}>
        {searchList()}
      </Grid>
    </>
  );
};

export default SearchBar;
