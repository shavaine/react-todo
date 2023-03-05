import { useEffect, useState } from "react";

const SearchBar = ({todos, setResults}) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filterFunc = () => {
            const filteredArray = []
            todos.forEach((todo) => {
                if (todo.task.includes(search)){
                    filteredArray.push(todo);    
                }
            })
            return filteredArray
        }
        const searchedArray = filterFunc()
        setResults(searchedArray)

    }, [search, setResults, todos])

    const handleChange = ({target}) =>{
        setSearch(target.value.toLowerCase());
    }

    return (
        <div className="mb-3">
            <input placeholder="Search" className="form-control" type="text" name="" value={search} onChange={handleChange} /> 
        </div>
    )
}

export default SearchBar