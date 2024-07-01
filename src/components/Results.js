import React, { useState, useEffect } from 'react';
import voteService from '../services/voteService';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await voteService.getResults();
                setResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div>
            <h1>Results</h1>
            {results.map((result) => (
                <div key={result._id}>
                    {result._id}: {result.count} votes
                </div>
            ))}
        </div>
    );
};

export default Results;
