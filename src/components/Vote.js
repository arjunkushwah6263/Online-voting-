import React, { useState,useContext } from 'react';
import voteService from '../services/voteService';
import { AuthContext } from '../context/AuthContext';

const Vote = () => {
    const [candidates, setCandidates] = useState(['Alice', 'Bob', 'Charlie']);
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const { auth } = useContext(AuthContext);

    const handleVote = async (e) => {
        e.preventDefault();
        try {
            await voteService.castVote(selectedCandidate, auth.token);
            alert('Vote cast successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleVote}>
            <h1>Vote</h1>
            <div>
                {candidates.map((candidate) => (
                    <div key={candidate}>
                        <input
                            type="radio"
                            name="candidate"
                            value={candidate}
                            onChange={(e) => setSelectedCandidate(e.target.value)}
                        />
                        <label>{candidate}</label>
                    </div>
                ))}
            </div>
            <button type="submit">Vote</button>
        </form>
    );
};

export default Vote;
