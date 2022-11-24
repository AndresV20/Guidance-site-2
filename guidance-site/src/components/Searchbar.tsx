import React, { useState } from "react";

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
    //conditional render
    function renderTrue(searchInput: string) {
        return (
            <p>Search successful!</p>
        )

    }
    function renderFalse(searchInput: string) {
        return (
            <p>Search was unsuccessful</p>
        )
    }
    function render(searchInput: string) {
        const handleChange = (event: any) => {
            event.preventDefault();
            setSearchInput(event.target.value);
        };

        if (searchInput.length > 0) {
            pages.filter((page) => {
                return page.name.match(searchInput);
            });
        }

        return (
            <div>
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
                {/* {pages[0].name} access first position of the array */}
                {pages.map(page => {
                    return <h1>{page.name}</h1>

                })}
                {/* <table>
            <tr>
                <th>Name:</th>
                <th>Type:</th>
            </tr>

            {  map1 = pages.map (x, x++ ){

            <div>
            <tr>
                <td>{pages.name}</td>
                <td>{pages.type}</td>
            </tr>
            </div>

            }
            </table> */}

            </div>
        )
        // if (searchInput == page.name){
        //     return renderTrue(searchInput);
        // }else {
        //     return renderFalse(searchInput);
        // }
    }
};

export default SearchBar;