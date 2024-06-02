"use client";
import React, { useEffect, useState, useCallback } from "react";
import SkillCard from "@/components/Skills/SkillCard";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ui/ContactCard";
import AddSkill from "@/components/Skills/AddSkill";
import { useToast } from "@/components/ui/use-toast";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

type Skill = {
  _id: string;
  domain: string;
  skills: Array<string>;
};

type Project = {
  _id: string;
  title: string;
  skills: string;
  img: { public_id: string; url: string };
  link: string;
  repo: string;
};

type Contact = {
  _id: string;
  name: string;
  email: string;
  message: string;
};

type Mode = "skills" | "contact" | "projects";

const Admin: React.FC = () => {
  const [data, setData] = useState<Skill[] | Contact[] | Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("skills");
  const { toast } = useToast();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const path = mode === "contact" ? "contact/rd" : mode;
      const req = await fetch("/api/" + path);
      const res = await req.json();
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

  const modalHandler = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="flex flex-col md:flex-row w-full bg-dot-white/[0.2]">
      <div className="my-14 md:my-0 md:h-screen md:w-96 flex items-center justify-center">
        <div className="flex md:flex-col gap-4 md:border md:p-10 rounded-xl bg-black">
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
      <div className="md:mt-24 px-10 flex flex-col gap-10 w-full h-[fit-content]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {mode === "skills" && (
              <>
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
                  <p>No skills found!</p>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="my-10"
                  onClick={modalHandler}
                >
                  + Add New
                </Button>
              </>
            )}
            {mode === "contact" && (
              <div className="flex justify-center md:justify-normal flex-wrap gap-6">
                {(data as Contact[]).length > 0 ? (
                  (data as Contact[]).map((item) => (
                    <ContactCard
                      key={item._id}
                      data={item}
                      deleteContact={deleteHandler}
                    />
                  ))
                ) : (
                  <p>Did not find any contacts yet!</p>
                )}
              </div>
            )}
            {mode === "projects" && (
              <div className="mb-10 flex justify-center md:justify-normal flex-wrap gap-6">
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
                  <p>Did not find any projects yet!</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
      {isOpen && <AddSkill isOpen={modalHandler} fetchData={fetchData} />}
    </div>
  );
};

export default Admin;
