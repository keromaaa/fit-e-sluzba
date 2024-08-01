import { useState } from "react";
import Modal from "./modal/Modal";
import Button from "./ui/components/Button";
import NotificationPopup from "./popups/NotificationPopup";

export interface NotificationModel {
  title: string;
  content: string;
  createdDate: string;
  createdBy: string;
}

const NotificationCard = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const notificationTemplate: NotificationModel = {
    title: "Notifikacija",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempora repellendus nesciunt perspiciatis delectus distinctio nulla mollitia perferendis a ipsum, fuga reiciendis, iure quia tenetur architecto nobis veritatis quos aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempora repellendus nesciunt perspiciatis delectus distinctio nulla mollitia perferendis a ipsum, fuga reiciendis, iure quia tenetur architecto nobis veritatis quos aspernatur.",
    createdDate: "25.6.2024.",
    createdBy: "Nina Bijedić",
  };

  return (
    <div className="relative border-2 rounded-md border-gray-200 bg-gray-100 p-4 h-36">
      <Modal isOpen={popupOpen} onClose={() => setPopupOpen(false)}>
        <NotificationPopup notification={notificationTemplate} />
      </Modal>
      <Button
        type="accent"
        text="Otvori"
        className="absolute right-4"
        onClick={() => setPopupOpen(true)}
      />
      <div className="flex gap-4 items-center">
        <h3 className="text-lg font-semibold">{notificationTemplate.title}</h3>
        <h4 className="text-sm text-gray-400">
          {notificationTemplate.createdDate}
        </h4>
      </div>
      <p className="line-clamp-3">{notificationTemplate.content}</p>
    </div>
  );
};

export default NotificationCard;
