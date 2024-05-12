import React, { useEffect, useState } from 'react';
import CourseList from './CourseList'; // Assuming CourseList component is imported

export default function Searchbar() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:3000/api/courses?query=${query}`);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const searchData = await res.json();
                setData(searchData);
                setError(null);
            } catch (error) {
                setError("Failed to fetch data");
            }
            setLoading(false);
        };

        // Only trigger fetchData if query length is more than 2 characters
        if (query.length > 2) {
            fetchData();
        } else {
            // Clear data if query length is less than 3 characters
            setData([]);
        }
    }, [query]);

    return (
        <div>
            <div className="app">
                <input
                    className="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && <CourseList data={data} />}
            </div>
        </div>
    );
}
