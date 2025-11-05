import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook payload structure:
 * {
 *   _type: "post" | "project" | "author" | "tag",
 *   _id: string,
 *   slug?: { current: string },
 *   // other document fields...
 * }
 *
 * Example payload for a blog post:
 * {
 *   "_type": "post",
 *   "_id": "abc123",
 *   "slug": { "current": "my-first-post" },
 *   "title": "My First Post"
 * }
 *
 * Sanity Webhook Configuration:
 * URL: https://yourdomain.com/api/revalidate?secret=YOUR_SECRET
 * HTTP Method: POST
 * API Version: v2021-03-25
 * Dataset: production (or your dataset name)
 * Projection: { _type, _id, "slug": slug.current }
 */

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Validate secret token
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const documentType = body?._type;
    const slug = body?.slug;

    if (!documentType) {
      return NextResponse.json(
        { message: "No document type provided" },
        { status: 400 }
      );
    }

    // Revalidate by document type tag (all pages using this content type)
    revalidateTag(documentType);

    // Revalidate specific paths based on content type
    const paths: string[] = [];

    if (documentType === "post") {
      paths.push("/blog");
      paths.push("/"); // Home page shows latest posts
      if (slug) {
        paths.push(`/blog/${slug}`);
      }
    } else if (documentType === "project") {
      paths.push("/projects");
      paths.push("/"); // Home page shows featured projects
      if (slug) {
        paths.push(`/projects/${slug}`);
      }
    } else if (documentType === "author" || documentType === "tag") {
      // Authors and tags affect posts/projects, so revalidate those pages
      paths.push("/blog");
      paths.push("/projects");
      paths.push("/");
    }

    // Revalidate all collected paths
    paths.forEach((path) => revalidatePath(path));

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      documentType,
      slug,
      paths,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: err },
      { status: 500 }
    );
  }
}
