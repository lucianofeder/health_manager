import ListContainer from "../../components/ListContainer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { Main, Container } from "./styles";

import api from "../../services/api";

const AllUsers = () => {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    api
      .get("users/?page=1")
      .then((res) => {
        console.log(res);
        console.log(res.data.results);
        setUsers(res.data.results);
      })
      .then(() => setLoaded(true));
  };

  useEffect(() => {
    if (!loaded) {
      fetchData();
    }
  });

  return (
    <Main>
      <Header />
      <Container>
        <SearchBar />
        <ListContainer list={users} />
      </Container>
      <Footer />
    </Main>
  );
};

export default AllUsers;
