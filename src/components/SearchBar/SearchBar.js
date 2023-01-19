import { useState } from "react"

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleChange = ({target}) =>{
        setSearch(target.value);
    }

    return (
        <form>
            <input type="text" name="" value={search} onChange={handleChange} />  
        </form>
    )
}

export default SearchBar