import ListContainer from "../../components/ListContainer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

import { useEffect, useState } from "react";
import api from "../../services/api";

import { Main, Container } from "../AllUsers/styles";

const AllGroups = () => {
  const [loaded, setLoaded] = useState(false);
  const [groups, setGroups] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [nextPage, setNextPage] = useState();

  const fetchData = (page) => {
    api
      .get(`groups/?page=${page}`)
      .then((res) => {
        console.log(res);
        setActualPage(page);
        setNextPage(getPageFromURL(res.data.next));
        setGroups(res.data.results);
      })
      .then(() => setLoaded(true));
  };

  const getPageFromURL = (url) => {
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
          list={groups}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          nextPage={nextPage}
          actualPage={actualPage}
          type="group"
        />
      </Container>
      <Footer />
    </Main>
  );
};

export default AllGroups;
