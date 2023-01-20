import { useState, useEffect } from "react"

const SearchBar = ({todos}) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = ({target}) =>{
        setSearch(target.value.toLowerCase());
    }

    useEffect(() => {
        setResults(
            todos.filter((todo) => {
                if (search === '') {
                    return ''
                } else {
                    return todo.toLowerCase().includes(search)
                }
            })
        )
    }, [search, todos]) 


    return (
        <div className="mb-3">
            <input placeholder="Search" className="form-control" type="text" name="" value={search} onChange={handleChange} /> 
            <ul>
                {results.map((todo) => {
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar