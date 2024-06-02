import React from "react";
import { Button } from "./button";

const ContactCard: React.FC<{
  data: {
    _id: string;
    name: string;
    email: string;
    message: string;
  };
  deleteContact: (type: string, id: string) => void;
}> = ({ data, deleteContact }) => {
  return (
    <div className="w-11/12 md:w-[25rem] border p-10 rounded-xl space-y-2 bg-black">
      <p>
        <span className="font-bold">Name:</span> {data.name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {data.email}
      </p>
      <p>
        <span className="font-bold">Message:</span> {data.message}
      </p>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteContact("contact/rd", data._id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default ContactCard;
