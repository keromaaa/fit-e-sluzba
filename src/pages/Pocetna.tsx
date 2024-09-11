import DefaultLayout from "../layouts/DefaultLayout";
import NotificationCard from "../components/NotificationCard";
import Button from "../components/ui/components/Button";
import Input from "../components/ui/components/Input";
import notifikacije from "../data/notifications.json";
import { useRef, useState } from "react";

const Pocetna = () => {
  const [notifications, setNotifications] = useState(notifikacije);

  const filterRef = useRef(null);
  const filterNotifications = () => {
    setNotifications(
      // @ts-ignore
      filterRef.current.value.length
        ? notifikacije.filter((notification) =>
            notification.naslov
              .toLowerCase()
              // @ts-ignore
              .startsWith(filterRef.current.value.toLowerCase())
          )
        : notifikacije
    );
  };

  return (
    <DefaultLayout pageTitle="Početna">
      <div className="flex gap-4">
        <Input ref={filterRef} type="text" placeholder="Pretraži obavijesti" />
        <Button
          text="Pretraži"
          className="flex-1 px-4"
          onClick={() => filterNotifications()}
        />
      </div>
      {notifications.map((notification, index) => (
        <NotificationCard key={index} notification={notification} />
      ))}
    </DefaultLayout>
  );
};

export default Pocetna;
