import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import contactsReduser from "./contacts/contactsReduser";
import middlewarePreventContactsDuplication from "./middlewares/middlewares";
import isLoadingReducer from "./redusers/redusers";
import usersRedusers from "./users/usersRedusers";

const store = configureStore({
  reducer: {
    user: usersRedusers,
    contacts: contactsReduser,
    isLoading: isLoadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewarePreventContactsDuplication),
});

const persistor = persistStore(store);

export { store, persistor };
