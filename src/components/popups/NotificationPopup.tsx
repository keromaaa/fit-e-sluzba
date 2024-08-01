import React from "react";
import { NotificationModel } from "../NotificationCard";

interface NotificationPopupProps {
  notification: NotificationModel;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  notification,
}) => {
  return (
    <div className="w-[600px] flex flex-col gap-4">
      <h2 className="text-xl max-w-[480px] font-semibold">
        {notification.title}
      </h2>
      <div className="-mt-4 flex gap-2 text-sm *:text-gray-400">
        <span>{notification.createdBy}</span>
        <span>•</span>
        <span>{notification.createdDate}</span>
      </div>
      <p>{notification.content}</p>
    </div>
  );
};

export default NotificationPopup;
