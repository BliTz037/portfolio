import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ME_DATA } from "@/data/me-data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-full px-20 text-center md:mb-10 mb-5">
          <div className="p-10">
            <Image
              src={ME_DATA.profilePicture ?? "#"}
              alt={"Profile Picture of " + ME_DATA.name}
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h1 className="md:text-6xl text-3xl font-bold p-2">
            {"Hi ! I'm Tom 👋"}
          </h1>
          <p className="md:text-2xl text-xl text-center mt-4 text-gray-700">
            {"I'm a French 🇫🇷"} {ME_DATA.role ?? "Developer"}{" "}
            {ME_DATA.company ? (
              <>
                <span> at </span>
                <a
                  className="font-bold"
                  href={ME_DATA.company.url}
                >{`@${ME_DATA.company.name}`}</a>
              </>
            ) : null}{" "}
            in Paris.
          </p>
          <div className="flex-row gap-4 mt-6 md:flex">
            <div className="flex space-x-2">
              {ME_DATA.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Button variant="outline" size="icon" key={social.name}>
                    <a
                      href={social.url}
                      title={`${ME_DATA.name} ${social.name}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 mt-5">
          <div>
            <h2 className="text-3xl font-bold md:ml-1 text-center">About me</h2>
            <ul className="md:list-disc list-disc md:text-xl p-10 text-sm">
              {ME_DATA.aboutMe.map((about, index) => (
                <li key={index}>{about}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:mt-2 mt-10">
            <h2 className="text-3xl text-center font-bold">Skills</h2>
            <div className="flex flex-wrap justify-center gap-2 p-8 md:w-1/2">
              {ME_DATA.skills.map((skill, index) => (
                <Badge key={index} variant={"secondary"} className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:mt-2 mt-10">
          <h2 className="text-3xl text-center font-bold">Projects</h2>
          <div className="flex flex-wrap justify-center gap-2 p-8">
            {ME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  logo={project.logo}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
