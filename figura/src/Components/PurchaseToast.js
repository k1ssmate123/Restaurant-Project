import { toast } from "react-toastify";
export default function PurchaseToast(name) {
  toast.success(`${name} hozzáadva a kosárhoz!`, {
    position: "top-right",
    autoClose: 2000,
  });
}
