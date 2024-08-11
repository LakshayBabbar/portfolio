"use client";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/projects/ProjectCard";
import AddProject from "@/components/projects/AddProject";
import { Project } from "@/types/types";
import useFetch from "@/hooks/useFetch";
import { deleteHandler, updateHandler } from "../utils";
import { useToast } from "@/components/ui/use-toast";

const Projects: React.FC = () => {
  const [projectModal, setProjectModal] = useState(false);
  const { toast } = useToast();

  const projectModalHandler = useCallback(() => {
    setProjectModal((prev) => !prev);
  }, []);

  const { data, error, loading, fetchData } = useFetch<{
    projects: Project[];
  }>();

  useEffect(() => {
    fetchData("/api/projects", "GET");
  }, [fetchData]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p>{error}</p>;

  const handlerProject = async (type: string, id: string, body: {}) => {
    let res = { message: "", success: false };
    if (type === "DELETE") {
      res = await deleteHandler(`projects/cud`, id);
    } else if (type === "UPDATE") {
      res = await updateHandler(`projects/cud`, body);
    } else {
      return null;
    }
    if (res?.success) {
      fetchData("/api/projects", "GET");
    }
    toast({
      title: res?.message,
      description: new Date().toString(),
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="space-y-4">
        <div className="w-full md:w-[fit-content] flex justify-center md:justify-normal">
          <Button
            size="lg"
            variant="outline"
            className="w-11/12"
            onClick={projectModalHandler}
          >
            New Project
          </Button>
        </div>
        <div className="flex justify-center md:justify-normal flex-wrap gap-6">
          {data?.projects?.map((item: Project) => (
            <ProjectCard
              key={item._id}
              projectData={item}
              handler={handlerProject}
            />
          ))}
        </div>
      </div>

      {projectModal && (
        <AddProject isOpen={projectModalHandler} fetchData={fetchData} />
      )}
    </div>
  );
};

export default Projects;
