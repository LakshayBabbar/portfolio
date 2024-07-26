import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Project } from "@/types/types";

const ProjectCard: React.FC<{
  projectData: Project;
  handler: (type: string, id: string, body: {}) => void;
}> = ({ projectData, handler }) => {
  const [data, setData] = useState<Project>(projectData);
  
  const dataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="w-11/12 md:w-96 space-y-2 p-8 border rounded-xl bg-black">
      <Input
        type="text"
        name="title"
        value={data.title}
        className="w-full"
        onChange={dataHandler}
      />
      <Input
        type="text"
        name="skills"
        value={data.skills}
        className="w-full"
        onChange={dataHandler}
      />
      {data.img && (
        <Image
          src={data.img.url}
          alt={data.title}
          width={250}
          height={200}
          className="w-full h-auto aspect-video object-cover"
        />
      )}
      <Input
        type="text"
        name="link"
        value={data.link}
        className="w-full"
        onChange={dataHandler}
      />

      <Input
        type="text"
        name="repo"
        value={data.repo}
        className="w-full"
        onChange={dataHandler}
      />
      <div className="space-x-4">
        <Button size="sm" onClick={() => handler("UPDATE", data._id, data)}>
          Update
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => handler("DELETE", data._id.toString(), {})}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
