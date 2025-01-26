import { Route, Routes } from "react-router-dom";
import {
  MainLayoutPage,
  AuthPage,
  Page404,
  UsersDataPage,
  UserPage,
} from "@pages/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutPage />}>
        <Route index element={<UsersDataPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
