import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/fakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

/* 
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"; */

/* if don't use lazy loading
443 modules transformed.
dist/index.html                   0.39 kB │ gzip:   0.27 kB
dist/assets/bg-CEKSzw8m.jpg     344.58 kB
dist/assets/index-GN1GfBe8.css   30.25 kB │ gzip:   5.02 kB
dist/assets/index-C2eH1ER7.js   522.15 kB │ gzip: 153.93 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit. */

/* after applying lazy loading
dist/index.html                           0.39 kB │ gzip:   0.26 kB
dist/assets/bg-CEKSzw8m.jpg             344.58 kB
dist/assets/Logo-BYigXoGP.css             0.03 kB │ gzip:   0.05 kB
dist/assets/Login-B5O0XBJ4.css            0.35 kB │ gzip:   0.22 kB
dist/assets/Product-ftt4lYil.css          0.47 kB │ gzip:   0.27 kB
dist/assets/Homepage-bvqVD1_J.css         0.51 kB │ gzip:   0.31 kB
dist/assets/PageNav-CcPXYRy9.css          0.51 kB │ gzip:   0.28 kB
dist/assets/AppLayout-BZFDJGSR.css        1.91 kB │ gzip:   0.70 kB
dist/assets/index-Dl00JtcG.css           26.58 kB │ gzip:   4.36 kB
dist/assets/Product.module-Be8LLB42.js    0.06 kB │ gzip:   0.07 kB
dist/assets/PageNotFound-2eQQFZ4-.js      0.15 kB │ gzip:   0.15 kB
dist/assets/Logo-BMkkig04.js              0.24 kB │ gzip:   0.21 kB
dist/assets/PageNav-BS2TiQIW.js           0.49 kB │ gzip:   0.27 kB
dist/assets/Homepage-sashcwOw.js          0.67 kB │ gzip:   0.42 kB
dist/assets/Pricing-DjK90G7O.js           0.67 kB │ gzip:   0.43 kB
dist/assets/Product-BSNYmdnr.js           0.88 kB │ gzip:   0.50 kB
dist/assets/Login-D3wff92g.js             1.00 kB │ gzip:   0.54 kB
dist/assets/AppLayout-BDgwZckp.js       156.99 kB │ gzip:  46.27 kB
dist/assets/index-DkcEbRE8.js           362.89 kB │ gzip: 107.24 kB */

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
