"use client";
import { Button } from "./button";
import { BackgroundGradient } from "./background-gradient";

const SkillCard: React.FC<{
  data: { title: string; skills: Array<string> };
}> = ({ data }) => {
  return (
    <BackgroundGradient>
      <div className="flex flex-col gap-5 min-w-80 p-4 border h-60 rounded-2xl bg-card">
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
    </BackgroundGradient>
  );
};

export default SkillCard;
