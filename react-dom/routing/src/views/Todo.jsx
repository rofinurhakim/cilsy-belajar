import React from 'react';
import { Link } from 'react-router-dom'; 
import useRouter from 'use-react-router';
const Todos = () => {
    const { history } = useRouter();
    const onNavigate = () => {
        history.push('/add-todos?title=makanan#nama=john');
    };
    return(
        <>
        todos
        <br />
        <Link
        to={{
            pathname: '/add-todos',
            search: 'title=makanan',
            hash: 'nama=john'
        }}
        >
            navigasi ke add todo dengan link 
        </Link>
        <br/>
        <button type="button" onClick={onNavigate}>
            navigasi ke add todo dengan use react router
        </button>
        <br />
        <div onClick={onNavigate}>navigasi ke add todo</div>
        </>
   
    )
   
};

export { Todos };