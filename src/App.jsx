import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthProvider";
// import { OrdersProvider } from "./Contexts/OrdersProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./ui/ProtectedRoute";
import { ChoosenListOrdersProvider } from "./features/Orders/ChoosenListOrdersProvider";

import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import OrdersPage from "./pages/OrdersPage";
import SalaryPage from "./pages/SalaryPage";
import UserPage from "./pages/UsersPage";
import CheckingPage from "./pages/CheckingPage";
import SettingsPage from "./pages/SettingsPage";
import Gallery from "./pages/Gallery";
import LoginForm from "./features/Authencation/LoginForm";
import SignUpForm from "./features/Authencation/SignUpForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthPage />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="signup" element={<SignUpForm />} />
            </Route>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route
                path="orders"
                element={
                  <ChoosenListOrdersProvider>
                    <OrdersPage />
                  </ChoosenListOrdersProvider>
                }
              />
              <Route path="salary" element={<SalaryPage />} />
              <Route path="users" element={<UserPage />} />
              <Route path="checking" element={<CheckingPage />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<p>Page do not exist</p>}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
