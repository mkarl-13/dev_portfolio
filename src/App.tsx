import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/components/AppRoutes";
import { LocaleProvider } from "@/context/LocaleContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LocaleProvider>
          <AppRoutes />
        </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
