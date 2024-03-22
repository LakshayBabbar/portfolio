"use client";
import { Button } from "./button";

const SkillCard: React.FC<{
  data: { title: string; skills: Array<string> };
}> = ({ data }) => {
  return (
      <div className="flex flex-col gap-5 min-w-80 p-4 border rounded-2xl bg-card">
        <h1 className="text-xl font-bold">{data.title}</h1>
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
