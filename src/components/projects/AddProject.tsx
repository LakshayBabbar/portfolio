import React, { useState, useCallback } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddProject: React.FC<{
  isOpen: () => void;
  fetchData: (url: string, method: string) => void;
}> = ({ isOpen, fetchData }) => {
  const [message, setMessage] = useState("");
  const [img, setImg] = useState<File | null>(null);
  const [data, setData] = useState({
    title: "",
    skills: "",
    link: "",
    repo: "",
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
      title: "",
      skills: "",
      link: "",
      repo: "",
    });
    setMessage("");
    isOpen();
  }, [isOpen]);

  const submitHandler = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setMessage("");
      try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("skills", data.skills);
        formData.append("link", data.link);
        formData.append("repo", data.repo);
        if (img) {
          formData.append("img", img);
        }
        const req = await fetch("/api/projects/cud", {
          method: "POST",
          body: formData,
        });
        const res = await req.json();
        if (!req.ok) {
          setMessage(res.message);
        } else {
          resetForm();
          fetchData("/api/projects", "GET");
        }
      } catch (error: any) {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
      }
    },
    [data, resetForm, fetchData, img]
  );

  return (
    <div className="z-50 w-full h-screen fixed top-0 left-0 backdrop-blur-xl flex justify-center items-center">
      <div className="w-11/12 sm:w-[30rem] rounded-xl border p-10 bg-black">
        <form onSubmit={submitHandler} className="space-y-4">
          <h1 className="text-xl font-bold">New Project</h1>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title}
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
          <Input
            type="text"
            name="link"
            placeholder="Project Link"
            value={data.link}
            onChange={valueHandler}
            required
          />
          <Input
            type="text"
            name="repo"
            placeholder="Github Repo"
            value={data.repo}
            onChange={valueHandler}
            required
          />
          <label
            htmlFor="input-file"
            className="border border-input bg-background hover:bg-accent hover:text-accent-foreground gap-2 flex-grow h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Upload File
          </label>
          {img && <p className="text-sm">Selected File: {img.name}</p>}
          <input
            type="file"
            name="img"
            onChange={(e) => setImg(e.target.files![0])}
            className="hidden"
            id="input-file"
            accept="image/*"
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

export default AddProject;
