import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import SearchBar from './SearchBar'
import data from "../../services/books.json";

test("render books", () => {
    
    
  
    const component = render(<SearchBar data={data}/>);
    console.log(component);
  });
  

