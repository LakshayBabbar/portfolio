import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Project } from "@/types/types";

const ProjectCard: React.FC<{
  projectData: Project;
  deleteProject: (path: string, id: string) => void;
  update: (path: string, body: Project) => void;
}> = ({ projectData, deleteProject, update }) => {
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
        <Button onClick={() => update("projects/cud", data)} size="sm">
          Update
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteProject("projects/cud", data._id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
