import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface skillsData {
  _id: string;
  domain: string;
  skills: Array<string>;
}

interface SkillCardProps {
  data: skillsData;
  deleteSkill: (path: string, id: string) => void;
  update: (
    path: string,
    data: { _id: string; domain: string; skills: Array<string> }
  ) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ data, deleteSkill, update }) => {
  const convert = data.skills ? data.skills.toString() : "";
  const [skills, setSkills] = useState<string>(convert);
  const [domain, setDomain] = useState<string>(data.domain);

  return (
    <div className="space-y-2">
      <Input
        type="text"
        className="text-xl h-12 w-[fit-content] font-bold"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <div className="md:flex gap-4">
        <Input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <div className="flex gap-4">
          <Button
            onClick={() =>
              update("skills/cud", {
                _id: data._id,
                domain,
                skills: skills.split(","),
              })
            }
          >
            Update
          </Button>
          <Button
            variant="destructive"
            onClick={() => deleteSkill("skills/cud", data._id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
