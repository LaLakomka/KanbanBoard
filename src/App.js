import React from "react";
import { Layout } from "./components/layout/layout";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Board } from "./components/board/board"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {CardMax} from "./components/board/cardMax/cardMax";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Board/>
  },
  {
      path: "/tasks/:cardId",
      element: <CardMax/>
  }
  ])

function App() {
  return (
      <Layout>
        <Header/>
        <main>
        <RouterProvider router={router}/>
        </main>
        <Footer/>
      </Layout>
  );
}

export default App;
