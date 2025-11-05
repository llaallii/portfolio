import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Your Role",
      type: "string",
      description:
        "Your specific role in the project (e.g., Lead Engineer, Systems Engineer)",
    }),
    defineField({
      name: "duration",
      title: "Project Duration",
      type: "string",
      description:
        "Timeline of the project (e.g., '6 months' or 'Jan 2023 - Jun 2023')",
    }),
    defineField({
      name: "challenge",
      title: "Challenge / Problem",
      type: "array",
      of: [{ type: "block" }],
      description: "What problem or challenge was the project addressing?",
    }),
    defineField({
      name: "constraints",
      title: "Constraints",
      type: "array",
      of: [{ type: "block" }],
      description: "Regulatory, technical, or business constraints faced",
    }),
    defineField({
      name: "approach",
      title: "Approach / Solution",
      type: "array",
      of: [{ type: "block" }],
      description:
        "How you approached the problem - methods, tools, techniques used",
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes / Results",
      type: "array",
      of: [{ type: "block" }],
      description: "Quantifiable results, achievements, and impact",
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      description: "Screenshots, diagrams, or visual assets for the project",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString()
          : "No date",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
