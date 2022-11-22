import React, {useState} from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");


let pages = [
    { name: "CSharp", type: "Languages" },
    { name: "Go", type: "Languages" },
    { name: "Typescript", type: "Languages" },
    { name: "Dart", type: "Languages" },
    { name: "HtmlCss", type: "Languages" },
    { name: "Dart", type: "Languages" },
    { name: "React", type: "Frameworks" },
    { name: "Flutter", type: "Frameworks" },
    { name: "TailwindCss", type: "Frameworks" },
    { name: "Debugging", type: "others" },
    { name: "Vitepress", type: "others" },
    { name: "Codeaccessibility", type: "others" },
]

const handleChange = (e:any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      pages.filter((page) => {
      return page.name.match(searchInput);
  });
  }
  return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>Name:</th>
    <th>Type:</th>
  </tr>

{pages.map((name, *index*) => {

<div>
  <tr>
    <td>{pages.name}</td>
    <td>{pages.type}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default SearchBar;




