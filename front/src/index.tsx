import { createRoot } from "react-dom/client";
import Main from "./components/Main";
// import { ToastContainer } from "react-toastify";

const container: HTMLElement | null = document.getElementById("root")!;
const root = createRoot(container);
root.render(<Main />);
