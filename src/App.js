import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/dashboard/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import LoginForm from "./components/users/LoginForm";
import Register from "./components/users/Register";
import NotFound from "./NotFound";
// import WithLoader from "./hoc/WithLoder";
import Products from "./components/products/Products";
import { AuthProvider } from "./context/AuthContext";
import LogOut from "./components/users/LogOut";
import Cart from "./components/products/Cart";
// const Loginhoc = WithLoader(LoginForm);


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/login", element: <LoginForm /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </>
  );
}

export default App;

// <div className="App">
//   <Router>
//     <Header />
//     <Routes>
//       <Route exact path="/home" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/login" component={LoginForm} />
//       <Route path="/register" component={Register} />
//     </Routes>
//   </Router>

// </div>
