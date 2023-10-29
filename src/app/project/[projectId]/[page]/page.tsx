import allProjectImages from "@/app/_generated";
import Image from "next/image";
import Link from "next/link";

const IMAGE_PER_PAGE = 10;
export default function ProjectPage({
  params,
}: {
  params: { projectId: string; page: string };
}) {
  const page = Number(params.page);
  const projectImages =
    allProjectImages[params.projectId as keyof typeof allProjectImages];
  if (!projectImages) return <div>Project not found</div>;

  const startIndex = (page - 1) * IMAGE_PER_PAGE;
  const endIndex = startIndex + IMAGE_PER_PAGE;
  const numPages = Math.ceil(projectImages.length / IMAGE_PER_PAGE);

  const renderedImages = projectImages
    .slice(startIndex, endIndex)
    .map((image, i) => <Image key={i} alt="" src={image} />);

  const renderedPageLinks = [];
  for (let i = 1; i <= numPages; i++) {
    if (i === page) {
      renderedPageLinks.push(<li className="text-gray-400">{i}</li>);
    } else {
      renderedPageLinks.push(
        <Link
          key={i}
          href={`/project/${params.projectId}/${i}`}
        >
          <li>{i}</li>
        </Link>
      );
    }
  }

  const renderedNavItems = [];

  if (page > 1) {
    renderedNavItems.push(
      <Link href={`/project/${params.projectId}/${page - 1}`}>Prev</Link>
    );
  } else {
    renderedNavItems.push(<div className="invisible">Prev</div>);
  }
  renderedNavItems.push(<ul className="flex tabular-nums lining-nums space-x-2">{renderedPageLinks}</ul>);
  if (page < numPages) {
    renderedNavItems.push(
      <Link href={`/project/${params.projectId}/${page + 1}`}>Next</Link>
    );
  }

  return (
    <div>
      <Link className="text-3xl mb-2" href="/">
        &#128281;
      </Link>
      <div className="flex flex-col items-center">
        <div className="mb-2">{renderedImages}</div>
        <div className="flex justify-between w-full text-2xl pl-1 pr-1">
          {renderedNavItems}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  let pages = [];
  for (const [projectId, projectImages] of Object.entries(allProjectImages)) {
    const numPages = Math.ceil(projectImages.length / IMAGE_PER_PAGE);
    for (let page = 1; page <= numPages; page++) {
      pages.push({ projectId, page: String(page) });
    }
  }

  return pages;
}
