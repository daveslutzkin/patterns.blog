export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606a5012e04a1a62b0748127",
                  title: "Sanity Studio",
                  name: "patterns-blog-studio",
                  apiId: "a6839506-2299-4bfd-ba64-e6f665cb2d8f",
                },
                {
                  buildHookId: "606a501251f2749a311cfe85",
                  title: "Blog Website",
                  name: "patterns-blog",
                  apiId: "ef7d13b2-ae1b-416d-9e53-5e9b7433593d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/daveslutzkin/patterns.blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://patterns-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
