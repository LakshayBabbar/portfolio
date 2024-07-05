"use client";
import React, { useEffect, useState, useCallback } from "react";
import SkillCard from "@/components/Skills/SkillCard";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ui/ContactCard";
import AddSkill from "@/components/Skills/AddSkill";
import { useToast } from "@/components/ui/use-toast";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import AddProject from "@/components/projects/AddProject";
import { Skill, Project, Contact, Mode } from "@/types/types";

const Admin: React.FC = () => {
  const [data, setData] = useState<Skill[] | Contact[] | Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMssg, setErrorMssg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [mode, setMode] = useState<Mode>("skills");
  const { toast } = useToast();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrorMssg("");
    try {
      const path = mode === "contact" ? "contact/rd" : mode;
      const req = await fetch("/api/" + path);
      const res = await req.json();
      !req.ok && setErrorMssg(res.message);
      switch (mode) {
        case "skills":
          setData(res.skills || []);
          break;
        case "contact":
          setData(res.contacts || []);
          break;
        case "projects":
          setData(res.projects || []);
          break;
        default:
          setData([]);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [mode]);

  useEffect(() => {
    fetchData();
  }, [mode, fetchData]);

  const deleteHandler = async (path: string, id: string) => {
    try {
      const req = await fetch(`/api/${path}/`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const res = await req.json();
      toast({
        title: res.message,
      });
      setData((prev: any) => prev.filter((item: any) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete item:", error);
      if (error instanceof Error) {
        toast({
          title: error.message,
        });
      }
    }
  };

  const updateHandler = async (path: string, body: {}) => {
    try {
      const req = await fetch(`/api/${path}/`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const res = await req.json();
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const modalHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const projectModalHandler = useCallback(() => {
    setProjectModal((prev) => !prev);
  }, []);

  return (
    <div className="my-16 flex flex-col md:flex-row w-full bg-dot-white/[0.2]">
      <div className="md:relative bg-black">
        <div className="md:sticky top-0 md:top-20 mt-10 flex md:flex-col justify-center flex-wrap gap-2 md:gap-4 md:w-80 px-2 md:px-10">
          <Button
            variant={mode === "skills" ? "default" : "outline"}
            onClick={() => setMode("skills")}
          >
            Skills
          </Button>
          <Button
            variant={mode === "projects" ? "default" : "outline"}
            onClick={() => setMode("projects")}
          >
            Projects
          </Button>
          <Button
            variant={mode === "contact" ? "default" : "outline"}
            onClick={() => setMode("contact")}
          >
            Contact
          </Button>
          <Button variant="outline" asChild>
            <Link href="/api/logout">Logout</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between md:gap-10 md:px-10 w-full h-[fit-content]">
        {loading ? (
          <p className="my-20">Loading...</p>
        ) : (
          <>
            {mode === "skills" && (
              <div className="my-10 w-11/12 space-y-10">
                {(data as Skill[]).length > 0 ? (
                  (data as Skill[]).map((item) => (
                    <SkillCard
                      key={item._id}
                      data={item}
                      deleteSkill={deleteHandler}
                      update={updateHandler}
                    />
                  ))
                ) : (
                  <p>{errorMssg}</p>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="my-10"
                  onClick={modalHandler}
                >
                  + Add New
                </Button>
              </div>
            )}
            {mode === "contact" && (
              <div className="my-10 flex w-11/12 justify-center sm:justify-start flex-wrap gap-6">
                {(data as Contact[]).length > 0 ? (
                  (data as Contact[]).map((item) => (
                    <ContactCard
                      key={item._id}
                      data={item}
                      deleteContact={deleteHandler}
                    />
                  ))
                ) : (
                  <p>{errorMssg}</p>
                )}
              </div>
            )}
            {mode === "projects" && (
              <div className="my-10 space-y-4">
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
                  {(data as Project[]).length > 0 ? (
                    (data as Project[]).map((item) => (
                      <ProjectCard
                        key={item._id}
                        projectData={item}
                        deleteProject={deleteHandler}
                        update={updateHandler}
                      />
                    ))
                  ) : (
                    <p>{errorMssg}</p>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {isOpen && <AddSkill isOpen={modalHandler} fetchData={fetchData} />}
      {projectModal && (
        <AddProject isOpen={projectModalHandler} fetchData={fetchData} />
      )}
    </div>
  );
};

export default Admin;
