import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import ErrorBoundary from "../ErrorBoundary";

function RootLayout() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default RootLayout;
