"use client";
import ContactCard from "@/components/ui/ContactCard";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import type { Contact } from "@/types/types";
import { useToast } from "@/components/ui/use-toast";
import { deleteHandler } from "../utils";

const Contact = () => {
  const { data, fetchData, loading, error } = useFetch<{
    contacts: Contact[];
  }>();

  const { toast } = useToast();

  const handler = async (id: string) => {
    const res = await deleteHandler("contact/rd", id);
    toast({
      title: res.message,
      description: new Date().toString(),
    });
    if (res.success) {
      fetchData("/api/contact/rd", "GET");
    }
  };

  useEffect(() => {
    fetchData("/api/contact/rd", "GET");
  }, [fetchData]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="my-10 flex w-full sm:w-11/12 justify-center sm:justify-start flex-wrap gap-6">
      {data?.contacts?.map((item: Contact) => {
        return (
          <ContactCard key={item._id} data={item} deleteHandler={handler} />
        );
      })}
    </div>
  );
};

export default Contact;
