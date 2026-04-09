import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Router } from "./routes";
import { FormStepsProvider, UserProvider } from "./context";

export function App() {
  return (
    <div className="font-[sans-serif] flex w-full min-h-screen bg-zinc-800">
      <UserProvider>
        <FormStepsProvider>
          <Router />
          <ToastContainer />
        </FormStepsProvider>
      </UserProvider>
    </div>
  );
}
