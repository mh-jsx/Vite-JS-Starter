import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

import ErrorBoundary from "./ErrorBoundary";
import WithSuspense from "./SuspenseWrapper";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route
          path="/"
          element={<Home />}
          handle={{
            crumb: () => <Link to="/">Home</Link>,
          }}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default Router;
