import { Button } from "@/components/ui/button";
import { ME_DATA } from "@/data/me-data";
import { BackpackIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col flex-col-reverse gap-4 md:flex-row items-center justify-center">
            <div className="flex flex-col">
              <h1 className="text-6xl font-bold">
                {ME_DATA.name ?? "Anonymous"}
              </h1>
              <p className="text-2xl text-center mt-4 text-gray-700">
                {ME_DATA.role ?? "Developer"}
                {ME_DATA.company ? (
                  <>
                    <span> at </span>
                    <a
                      className="font-bold"
                      href={ME_DATA.company.url}
                    >{`@${ME_DATA.company.name}`}</a>
                  </>
                ) : null}
              </p>
            </div>
            <div>
              <Image
                src={ME_DATA.profilePicture ?? "#"}
                alt={"Profile Picture of " + ME_DATA.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-row gap-4 mt-6 hidden md:flex">
          <Button>
            <a href={ME_DATA.cvUrl}>Show my CV</a>
          </Button>
          <div className="flex space-x-2">
            {ME_DATA.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button variant="outline" size="icon" key={social.name}>
                  <a href={social.url} title={`${ME_DATA.name} ${social.name}`}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 block md:hidden w-full">
          <Button>
            <BackpackIcon className="mr-2 h-4 w-4" />
            <a href={ME_DATA.cvUrl}>Show my CV</a>
          </Button>
          {ME_DATA.socials.map((social) => {
            const Icon = social.icon;
            const socialStyles: { [key: string]: string } = {
              GitHub: "bg-gray-800 hover:bg-gray-700 text-white",
              LinkedIn: "bg-sky-500 hover:bg-sky-400 text-white",
              Medium: "bg-zinc-800 hover:bg-zinc-700 text-white",
              Mail: "bg-slate-500 hover:bg-slate-400 text-white",
            };
            return (
              <Button
                className={
                  socialStyles[social.name] ?? "bg-gray-500 hover:bg-gray-400"
                }
                key={social.name}
                asChild
              >
                <Link
                  href={social.url}
                  title={`${ME_DATA.name} ${social.name}`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {social.name}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
