"use client";
import { useCallback, useEffect, useState } from "react";
import SkillCard from "@/components/Skills/SkillCard";
import AddSkill from "@/components/Skills/AddSkill";
import { Button } from "@/components/ui/button";
import { Skill } from "@/types/types";
import useFetch from "@/hooks/useFetch";
import { deleteHandler, updateHandler } from "../utils";
import { useToast } from "@/components/ui/use-toast";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, fetchData, loading, error } = useFetch<{ skills: Skill[] }>();
  const { toast } = useToast();

  const modalHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    fetchData("/api/skills", "GET");
  }, [fetchData]);

  const handlerSkills = async (type: string, id: string, body: {}) => {
    let res = { message: "", success: false };
    if (type === "DELETE") {
      res = await deleteHandler(`skills/cud`, id);
    } else if (type === "UPDATE") {
      res = await updateHandler(`skills/cud`, body);
    } else {
      return null;
    }
    if (res?.success) {
      fetchData("/api/skills", "GET");
    }
    toast({
      title: res?.message,
      description: new Date().toString(),
    });
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="my-10 sm:w-11/12 space-y-10 px-5 sm:px-0">
      {data?.skills?.map((skill: Skill) => {
        return (
          <SkillCard
            key={skill._id}
            data={skill}
            skillhandler={handlerSkills}
          />
        );
      })}
      <Button
        variant="outline"
        size="lg"
        className="my-10"
        onClick={modalHandler}
      >
        + Add New
      </Button>
      {isOpen && <AddSkill isOpen={modalHandler} fetchData={fetchData} />}
    </div>
  );
};

export default Skills;
