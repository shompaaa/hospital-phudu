import React from 'react';
import Navbar from '../../components/Header/Navbar';


const ErrorPage = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div>
            <img className='mx-auto' height={350} width={500} src="./404.png" alt="404 Page" />
        </div>
       </div>
    );
};

export default ErrorPage;