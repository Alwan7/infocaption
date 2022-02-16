import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentDetails from "./ContentDetails";
import Pagination from "@material-ui/lab/Pagination";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";
import { Input, List,  } from 'antd';
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
const Movies = () => {
  const { Search } = Input;
   const [data, setData] = useState({ results: [] });


  const [page, setPage] = useState(9);
 const [query, setQuery] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);


  //FETCH 
  const fetchMovies = async () => {
    try {
      const  result  = await axios.get(
        `https://support.infocaption.com/API/lucene/guidesearch?searchQuery=${query}&page=${page}
        `
      );
      setData(result.data);
     
      setLoading(false);
      setNumberOfPages(data.totalPages);
    } catch (error) {
      setIsErr(true);
    }
  };
  
  useEffect(() => {
    
    fetchMovies();


  }, [page]);

  const onSearch = value => fetchMovies();
    const handleChange = page => {
    setPage(page);
    window.scroll(0, 0);
  };
   
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Content>
     <Search placeholder="Search" enterButton="Search" size="large" onSearch={onSearch} value={query} onChange={ (event) => setQuery(event.target.value)}  />
      
      {loading ? (
        <LoadingComponent />
      ) : isErr ? (
        <ErrorComponent />
      ) : (
        <>
         
          <List itemLayout="vertical"
                    size="large"
                    
                   
                    dataSource={data.results}
                  >
                    
            {data.results.map(item => (
              
               
                <ContentDetails key={item.id} item={item} />
               
              
            ))}
          </List>
          <Pagination
          onClick={e => handleChange(e.target.textContent)}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          variant="outlined"
          count={numberOfPages}
                  />
               
                  
        </>
          )}
          </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Infocaption ©2022</Footer>
    </Layout>
  );
};

export default Movies;
