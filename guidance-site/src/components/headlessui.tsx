import { useState } from "react";
import { Combobox} from "@headlessui/react";

const pages = [
    "Home",
    "CSharp",
    "Dart",
    "HtmlCss",
    "Go",
    "Typescript",
    "Flutter",
    "React",
    "TailwindCss",
    "Debugging",
    "Vitepress",
    "Codeaccess",

]

export function MyComoboBox (){
    const [selectedPage, setSelectedPage] = useState(pages[0]);
    const [query, setQuery] = useState('');

    const filteredPages = 
        query === ''
        ? pages
        : pages.filter((page) => {
            return page.toLowerCase().includes(query.toLowerCase())
        })

    return (
        <Combobox value={selectedPage} onChange = {setSelectedPage}>
            <Combobox.Input onChange={(event)=> setQuery(event.target.value)} />
            <Combobox.Options>
            {filteredPages.map((page) => (
          <Combobox.Option key={page} value={page}>
            {page}
          </Combobox.Option>
        ))}
            </Combobox.Options>
        </Combobox>
    )

}