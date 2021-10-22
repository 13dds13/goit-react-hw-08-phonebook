import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/title/Title";
import ContactForm from "../components/contactForm/ContactForm";
import Filter from "../components/filter/Filter";
import Notification from "../components/notification/Notification";
import ContactsList from "../components/contactsList/ContactsList";
import styles from "../components/container/Container.module.css";
import dataUI from "../data/dataUI.json";
import { getContacts } from "../redux/contacts/contactsOperations";
import { getIsLoading } from "../redux/selectors/selectors";
import { getToken } from "../redux/users/usersSelectors";

const { titleMain, titleSecondary, isLoadingNow } = dataUI;

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      <Title title={titleMain} />
      <ContactForm isLoading={isLoading} />
      <Title title={titleSecondary} />
      <Filter />
      {isLoading ? <Notification title={isLoadingNow} /> : <ContactsList />}
    </div>
  );
};

export default ContactsPage;
