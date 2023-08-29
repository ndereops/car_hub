"use client";
import React from "react";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import { SearchManufacturer } from "./index";
import { useRouter } from "@/node_modules/next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type=" submit"
    className={`-ml-3 x-10 
  ${otherClasses}`}
  >
    <Image
      src="/magnifying-glass.svg"
      alt="search-icon"
      width={40}
      height={40}
    />
  </button>
);

const SearchBar = ( {setManufacturer,setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search Bar");
    }
    setModel(searchModel),
    setManufacturer (searchManufacturer);
  };



  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className=" searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
          alt="carmodel"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Golf"
          className=" searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
