import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ProjectItems {
  _id: string;
  title: string;
  skills: string;
  img: { public_id: string; url: string };
  link: string;
  repo: string;
}

const ProjectCard: React.FC<{
  projectData: ProjectItems;
  deleteProject: (path: string, id: string) => void;
  update: (path: string, body: ProjectItems) => void;
}> = ({ projectData, deleteProject, update }) => {
  const [data, setData] = useState<ProjectItems>(projectData);
  const dataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="w-11/12 md:w-[30rem] space-y-2 p-10 border rounded-xl bg-black">
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
          className="w-full h-auto"
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
        <Button onClick={() => update("projects/cud", data)}>Update</Button>
        <Button
          variant="destructive"
          onClick={() => deleteProject("projects/cud", data._id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
