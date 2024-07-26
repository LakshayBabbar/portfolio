import React from "react";
import { Button } from "./button";
import type { Contact } from "@/types/types";

const ContactCard: React.FC<{
  data: Contact;
  deleteHandler: (id: string) => void;
}> = ({ data, deleteHandler }) => {
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
        onClick={() => deleteHandler(data._id.toString())}
      >
        Delete
      </Button>
    </div>
  );
};

export default ContactCard;
