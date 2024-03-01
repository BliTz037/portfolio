import { ME_DATA } from "@/data/me-data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full px-20 text-center md:mb-20">
        <div className="mb-3">
          <Image
            src={ME_DATA.profilePicture ?? "#"}
            alt={"Profile Picture of " + ME_DATA.name}
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <h1 className="md:text-6xl text-4xl font-bold p-2">Hi ! I'm Tom 👋</h1>
        <p className="text-2xl text-center mt-4 text-gray-700">
          I'm a French 🇫🇷 {ME_DATA.role ?? "Developer"}{" "}
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
      </div>
      <div className="flex flex-col items-center gap-1 md:mt-5 mt-10">
        <div>
          <h2 className="text-3xl text-center font-bold">About me</h2>
          <ul className="md:list-disc list-disc md:text-xl p-10 text-sm">
            <li>
              👨‍💻 I'm a backend engineer with a strong focus on API design and
              development.
            </li>
            <li>
              🎓 I was an ex-students at{" "}
              <a href="https://www.epitech.eu/" className="font-bold text-gray-700">@Epitech</a>.
            </li>
            <li>❤️ I love API</li>
            <li>🚂 I love Thomas The Tank Engine</li>
            <li>🏎️ My favorite pilot in Formula 1 is Lewis Hamilton</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
