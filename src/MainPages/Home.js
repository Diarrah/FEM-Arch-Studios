import React from 'react';
import { HeroHomepage, Welcome, HomepageCTA, Featured } from '../components';

const Home = () => (
    <div className="page">
        <div className="page__directory">
            <span>Home</span>
        </div>
        <HeroHomepage />
        <Welcome />
        <HomepageCTA />
        <Featured />
    </div>
)

export default Home;