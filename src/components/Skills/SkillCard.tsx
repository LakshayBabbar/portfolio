import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skill } from "@/types/types";

interface SkillCardProps {
  data: Skill;
  skillhandler: (type: string, id: string, body: {}) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ data, skillhandler }) => {
  const convert = data.skills ? data.skills.toString() : "";
  const [skills, setSkills] = useState<string>(convert);
  const [domain, setDomain] = useState<string>(data.domain);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        className="text-xl h-12 font-bold"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <Input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="w-full h-14"
      />
      <div className="flex gap-4">
        <Button
          onClick={() =>
            skillhandler("UPDATE", data._id, {
              _id: data._id,
              skills: skills.split(","),
              domain,
            })
          }
        >
          Update
        </Button>
        <Button
          variant="destructive"
          onClick={() => skillhandler("DELETE", data._id.toString(), {})}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SkillCard;
