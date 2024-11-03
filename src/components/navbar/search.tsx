import React, { MouseEventHandler } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";


type HandleSearchClick = MouseEventHandler<HTMLButtonElement> | undefined;


const SearchBar = ({handleSearchClick}: {handleSearchClick: HandleSearchClick}) => {
  return (
    <div className="flex bg-white p-2">
      <div>
        <form action="#" className="flex">
          <Input
            type="search"
            placeholder="Search"
            className="w-[40vw]"
            name="search"
          />
            <Button variant={"ghost"} type="submit" >
              <Search />
            </Button>
            
            <Button variant={"ghost"} type="submit" onClick={handleSearchClick}>
              <X />
            </Button>

        </form>
      </div>
    </div>
  );
};

export default SearchBar;
