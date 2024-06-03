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
type ErrorRes = {
  message: string;
  success: boolean;
};

export type { Skill, Project, Contact, Mode, ErrorRes };
