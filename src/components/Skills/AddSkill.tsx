import React, { useState, useCallback } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddSkill: React.FC<{
  isOpen: () => void;
  fetchData: (url: string, method: string) => void;
}> = ({ isOpen, fetchData }) => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    domain: "",
    skills: "",
  });

  const valueHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setData({
      domain: "",
      skills: "",
    });
    setMessage("");
    isOpen();
  }, [isOpen]);

  const submitHandler = useCallback(
    async (e: React.FormEvent) => {
      console.log("submit");
      e.preventDefault();
      setMessage("");
      try {
        const req = await fetch("/api/skills/cud", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            domain: data.domain,
            skills: data.skills.split(","),
          }),
        });
        const res = await req.json();
        if (!req.ok) {
          setMessage(res.message);
        } else {
          resetForm();
          fetchData("/api/skills", "GET");
        }
      } catch (error: any) {
        console.error("Error:", error.message);
        setMessage("An error occurred. Please try again.");
      }
    },
    [data, resetForm, fetchData]
  );

  return (
    <div className="z-50 w-full h-screen fixed top-0 left-0 backdrop-blur-xl flex justify-center items-center">
      <div className="w-11/12 sm:w-[30rem] rounded-xl border p-10 bg-black">
        <form onSubmit={submitHandler} className="space-y-4">
          <h1 className="text-xl font-bold">New Skill</h1>
          <Input
            type="text"
            name="domain"
            placeholder="Domain"
            value={data.domain}
            onChange={valueHandler}
            required
          />
          <Input
            type="text"
            name="skills"
            placeholder="Skills (Separated by commas)"
            value={data.skills}
            onChange={valueHandler}
            required
          />
          {message && <p className="text-red-500">{message}</p>}
          <div className="flex w-full justify-end gap-4">
            <Button type="button" onClick={resetForm}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;
