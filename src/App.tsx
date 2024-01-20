import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import { AppProvider } from "context/AppContext";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;
