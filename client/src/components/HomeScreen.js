import React, { useContext, useEffect } from "react";
import { GlobalStoreContext } from "../store";
import ListCard from "./ListCard.js";
import MUIDeleteModal from "./MUIDeleteModal";
import List from "@mui/material/List";
import AppBanner from "./AppBanner";
import AppFooter from "./AppFooter";
/*  
    @author McKilla Gorilla
*/
const HomeScreen = () => {
  const { store } = useContext(GlobalStoreContext);

  useEffect(() => {
    store.loadIdNamePairs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let listCard = "";
  if (store) {
    listCard = (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {store.idNamePairs.map(pair => (
          <ListCard key={pair._id} idNamePair={pair} selected={false} />
        ))}
      </List>
    );
  }

  // fool proof design ->
  let isListModalOpen = store.isDeleteListModalOpen();
  let editStatus = false;
  if (store.listNameActive) {
    editStatus = true;
  }

  return (
    <div>
      <AppBanner />
      <main id='list-selector-list'>
        {listCard}
        <MUIDeleteModal />
      </main>

      <AppFooter />
    </div>
  );
};

export default HomeScreen;
