import { Button, ButtonGithubIcon } from "@/components/ui/button";
import { ME_DATA } from "@/data/me-data";
import { BackpackIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-wrap-reverse flex-col lg:flex-row gap-4 lg:flex-cols">
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold">Tom Rives</h1>
            <p className="text-2xl text-center mt-4 text-gray-700">
              Backend Engineer
              {ME_DATA.company ? (
                <>
                  <span> at </span>
                  <a
                    className="font-bold"
                    href={ME_DATA.company.url}
                  >{`@${ME_DATA.company.name}`}</a>
                </>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture of Tom Rives"
              width={100}
              height={100}
              className="rounded-full"
            />
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
                  <a href={social.url}>
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
            return (
              <Button className={`${social.color}`} key={social.name}>
                <Icon className="mr-2 h-4 w-4" />
                <a href={social.url}>{social.name}</a>
              </Button>
            );
          })}
        </div>
      </div>
    </main>
  );
}