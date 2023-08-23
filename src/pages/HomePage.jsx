import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogList from '../component/BlogList';
import { postLatest } from '../APIRequest/APIRequest';

const HomePage = () => {

    const [list,SetList]=useState([]);
    console.log(list);

    useEffect(()=>{

        (async()=>{
           let res= await postLatest()
           SetList(res);


        })()



    },[]);


    return (
        <Layout>
            <BlogList list={list}/>
        </Layout>
    );
};

export default HomePage;