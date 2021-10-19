import React from "react";
import Navigation from "./navigation/Navigation";
import { mainRoutes } from "../routes/mainRoutes";
import RoutesList from "./routesList/RoutesList";

const App = () => {
  return (
    <>
      <h1>contactus</h1>
      <Navigation routes={mainRoutes} />
      <RoutesList routes={mainRoutes} />
    </>
  );
};

export default App;

//=====================================================
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Title from "./title/Title";
// import ContactForm from "./contactForm/ContactForm";
// import Filter from "./filter/Filter";
// import Notification from "./notification/Notification";
// import ContactsList from "./contactsList/ContactsList";
// import styles from "./container/Container.module.css";
// import dataUI from "../data/dataUI.json";
// import { fetchContacts } from "../redux/contacts/contactsOperations/contactsOperations";
// import { getIsLoading } from "../redux/contacts/contactsSelectors/contactsSelectors";

// const { titleMain, titleSecondary, isLoadingNow } = dataUI;

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={styles.container}>
//       <Title title={titleMain} />
//       <ContactForm isLoading={isLoading} />
//       <Title title={titleSecondary} />
//       <Filter />
//       {isLoading ? <Notification title={isLoadingNow} /> : <ContactsList />}
//     </div>
//   );
// };

// export default App;
