import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "@radix-ui/react-icons";
import { ME_DATA } from "@/data/me-data";

export function Header() {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex flex-row gap-3 p-5">
        <CodeIcon width={32} height={32} />
        <h1 className="font-heading text-xl md:text-2xl">Tom Rives</h1>
      </div>
      <div>
        <Link href={ME_DATA.cvUrl}>
          <Button variant="link">CV</Button>
        </Link>
        <Link href="/linktree">
          <Button variant="link">Contact</Button>
        </Link>
      </div>
    </div>
  );
}
