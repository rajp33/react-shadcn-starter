import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/question1">Question 1</Link></li>
                    <li><Link to="/question2">Question 2</Link></li>
                    <li><Link to="/question3">Question 3</Link></li>
                    <li><Link to="/question4">Question 4</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
