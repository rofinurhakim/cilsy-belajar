import React from 'react';
import useRouter from 'use-react-router';
import qs from 'query-string'

const AddTodos = props => {
const { location } = useRouter();
const parserQs = qs.parse(location.search);
console.log('location.search', location.title);

    console.log ('props', props);
    const onGoBack = () => {
        props.history.goBack();
    };
    return (
        <>
        Add Todos
        <button onClick={onGoBack}>kembali</button>
        </>
    )
  
};

export { AddTodos };