import React from 'react';
import Footer from '../components/shared/Footer';
import TopNav from '../components/shared/TopNav';
import useDynamicTitle from '../components/shared/useDynamicTitle';

const Blog = () => {
    useDynamicTitle("Blog")
    return (
        <div>
            <TopNav />
            <Footer />
        </div>
    );
};

export default Blog;