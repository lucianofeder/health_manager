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
  const [textSearch, setTextSearch] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const fetchData = (page) => {
    api
      .get(`groups/?page=${page}`)
      .then((res) => {
        setActualPage(page);
        setNextPage(getPageFromURL(res.data.next));
        setGroups(res.data.results);
      })
      .then(() => setLoaded(true));
  };

  const fetchFiltered = (page = 1) => {
    api
      .get(`groups/?search=${formattedText}&page=${page}`)
      .then((res) => {
        setActualPage(page);
        setNextPage(getPageFromURL(res.data.next));
        setGroups(res.data.results);
      })
      .then(() => setLoaded(true));
  };

  const handleClick = () => {
    textSearch.length ? fetchFiltered() : fetchData(1);
  };

  const getPageFromURL = (url) => {
    if (url) {
      url = url.split("=");
      if (!isNaN(url[url.length - 1])) {
        return Number(url[url.length - 1]);
      } else {
        url = url.join("=");
        for (let i = 0; i < url.length; i++) {
          if (!isNaN(url[i])) {
            console.log(Number(url[i]));
            return Number(url[i]);
          }
        }
      }
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
  const handleInput = (evt) => {
    const input = evt.target.value;
    const text = input.split(" ").join("%20");
    setFormattedText(text);
    setTextSearch(input);
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
        <SearchBar
          value={textSearch}
          handleInput={handleInput}
          handleClick={handleClick}
        />
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
