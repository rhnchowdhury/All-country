import React, { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={handleChange}></input>
    </div>
  );
};

export default Search;
