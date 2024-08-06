import React from 'react';
import GhostlyWindups from './GhostlyWindups';
import './styles.css';

const App = () => {
    return (
        <div className="book-container">
            <div className="book">
                <div className="page left-page">
                    <GhostlyWindups />
                </div>
                <div className="page right-page">
                    <GhostlyWindups />
                </div>
            </div>
        </div>
    );
};

export default App;
