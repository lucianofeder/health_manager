import ListContainer from "../../components/ListContainer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import api from "../../services/api";

import { Main, Container } from "./styles";

const AllUsers = () => {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [nextPage, setNextPage] = useState();

  const fetchData = (page) => {
    api
      .get(`users/?page=${page}`)
      .then((res) => {
        setActualPage(page);
        setNextPage(getPageFromURL(res.data.next));
        setUsers(res.data.results);
      })
      .then(() => setLoaded(true));
  };

  const getPageFromURL = (url) => {
    console.log(url);
    if (url) {
      url = url.split("=");
      return Number(url[url.length - 1]);
    }
  };

  const handleNextPage = () => {
    setActualPage(nextPage);
    setLoaded(false);
  };

  const handlePreviousPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1);
      setLoaded(false);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchData(actualPage);
    }
  });

  return (
    <Main>
      <Header />
      <Container>
        <SearchBar />
        <ListContainer
          list={users}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          nextPage={nextPage}
          actualPage={actualPage}
        />
      </Container>
      <Footer />
    </Main>
  );
};

export default AllUsers;
