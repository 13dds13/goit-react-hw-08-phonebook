import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/contactsReduser/contactsReduser";
import middlewarePreventContactsDuplication from "./middlewares/middlewares";

const store = configureStore({
  reducer: { contacts: contactsReduser },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewarePreventContactsDuplication),
});

export default store;
