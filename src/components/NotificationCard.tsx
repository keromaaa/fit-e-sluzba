import { useState } from "react";
import Modal from "./modal/Modal";
import Button from "./ui/components/Button";
import NotificationPopup from "./popups/NotificationPopup";
import { Notification } from "../models/Notification";

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="relative border-2 rounded-md border-gray-200 bg-gray-100 p-4 h-36">
      <Modal isOpen={popupOpen} onClose={() => setPopupOpen(false)}>
        <NotificationPopup notification={notification} />
      </Modal>
      <Button
        type="accent"
        text="Otvori"
        className="absolute right-4"
        onClick={() => setPopupOpen(true)}
      />
      <div className="flex gap-4 items-center">
        <h3 className="text-lg font-semibold">{notification.naslov}</h3>
        <h4 className="text-sm text-gray-400">{notification.createdAt}</h4>
      </div>
      <p className="line-clamp-3 ">{notification.sadrzaj}</p>
    </div>
  );
};

export default NotificationCard;
