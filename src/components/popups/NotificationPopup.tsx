import React from "react";
import { Notification } from "../../models/Notification";

interface NotificationPopupProps {
  notification: Notification;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  notification,
}) => {
  return (
    <div className="w-[600px] flex flex-col gap-4">
      <h2 className="text-xl max-w-[480px] font-semibold">
        {notification.naslov}
      </h2>
      <div className="-mt-4 flex gap-2 text-sm *:text-gray-400">
        <span>{notification.createdBy}</span>
        <span>•</span>
        <span>{notification.createdAt}</span>
      </div>
      <p className="whitespace-pre-line">{notification.sadrzaj}</p>
    </div>
  );
};

export default NotificationPopup;
