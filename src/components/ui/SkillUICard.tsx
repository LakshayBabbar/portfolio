"use client";
import { Button } from "./button";

const SkillCard: React.FC<{
  data: { domain: string; skills: Array<string> };
}> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 min-w-80 p-6 rounded-2xl bg-black/65 border border-neutral-800/85">
      <h1 className="text-xl font-bold">{data.domain}</h1>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((item) => {
          return (
            <Button key={item} variant="secondary">
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
