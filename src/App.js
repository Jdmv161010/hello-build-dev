import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "router/AppRouter";
import store from "store/store";
import { AppTheme } from "theme";

function App() {
  return (
    <AppTheme>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </AppTheme>
  );
}

export default App;
