import "./App.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { DeliveryDetails } from "./pages/DeliveryDetails";
import { FormComponent } from "./components/Form";
import CardComponent from "./components/CardComponent";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/Register";
import { GetOrders } from "./features/orders/GetOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FormComponent />} />
          <Route path="delivery-details" element={<DeliveryDetails />} />
          <Route path="/success" element={<CardComponent />} />
        </Route>
        <Route path="auth" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="orders" element={<GetOrders/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
