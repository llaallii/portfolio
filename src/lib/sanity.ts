import { client } from "@/sanity/lib/client";
import { draftMode } from "next/headers";

export async function fetchSanity<T>({
  query,
  params = {},
  tags,
  revalidate,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number | false;
}): Promise<T> {
  // Only check draft mode during runtime (not during build/generateStaticParams)
  let isDraftMode = false;
  try {
    isDraftMode = (await draftMode()).isEnabled;
  } catch {
    // draftMode() throws during build time, so we default to false
    isDraftMode = false;
  }

  try {
    return await client.fetch<T>(query, params, {
      cache: isDraftMode ? "no-store" : undefined,
      next: {
        revalidate: isDraftMode ? 0 : revalidate,
        tags: tags || [],
      },
      perspective: isDraftMode ? "previewDrafts" : "published",
      useCdn: !isDraftMode,
    });
  } catch (error) {
    // Return empty array for list queries, null for single item queries
    // This allows the build to succeed even without Sanity configured
    console.warn("Sanity fetch failed:", error);
    if (query.includes("[0]")) {
      return null as T;
    }
    return [] as T;
  }
}
