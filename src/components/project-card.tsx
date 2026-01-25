import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { CodeIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo: string | null;
}

export function ProjectCard({ title, description, tags, link, logo }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 w-full md:w-1/3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {logo ? (
              <Image src={logo} alt={title} width={72} height={72} />
            ) : (
              <CodeIcon width={32} height={32} />
            )}
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
