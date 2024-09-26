import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "question1",
                element: <Question1 />,
            },
            {
                path: "question2",
                element: <Question2 />,
            },
            {
                path: "question3",
                element: <Question3 />,
            },
            {
                path: "question4",
                element: <Question4 />,
            },
        ],
    },
], {
    basename: global.basename
})
