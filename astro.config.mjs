import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Guide Docs",
      social: {
        github: "https://github.com/saurabhjaykar1603",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Introduction to Guide Docs", link: "/intro/intro/" },
          ],
        },
        // {
        //   label: "HTML",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "What is HTML", link: "/html/html/" },
        //   ],
        // },
        {
          label: "Python",
          items: [
            { label: "Introduction to Python", link: "/python/introduction" },
            { label: "Python inner working", link: "/python/innerworking" },
            {
              label: "Mutable and Immutable Types in Python",
              link: "/python/mutable-and-immutable",
            },
          ],
        },
        {
          label: "TypeScript",
          items: [
            { label: "What is TypeScript", link: "/typescript/typescript/" },

            {
              label: "Typescript inner working and installation",
              link: "/typescript/innerworking",
            },
            {
              label: "TypeScript Data Types",
              link: "/typescript/typescript-data-types",
            },
            {
              label: "Types and Interfaces in TypeScript",
              link: "/typescript/typescript-type-and-interfaces",
            },
            {
              label: "TypeScript Optional Properties ",
              link: "/typescript/typescript-optional-properties",
            },
          ],
        },
        {
          label: "JavaScript",
          items: [
            {
              label: "What is JavaScript",
              link: "/javascript/javascript_introduction",
            },
            {
              label: "Variables in JavaScript",
              link: "/javascript/javascript_variables",
            },
            {
              label: "Datatypes in JavaScript",
              link: "/javascript/javascript_datatypes",
            },
            {
              label: "Stack and Heap Memory in JavaScript",
              link: "/javascript/javascript_stack_and_heap_memory",
            },
            {
              label: "Rest and Spread Operator in JavaScript",
              link: "/javascript/javascript_rest_and_spread_operator",
            },
          ],
        },
        {
          label: "Node",
          items: [{ label: "What is Node", link: "/node/node/" }],
        },
        {
          label: "Dsa JavaScript Questions",
          items: [{ label: "Easy", link: "/dsa-js/questions/" }],
        },
        {
          label: "Devops",
          items: [
            {
              label: "Full Node.js Deployment to AWS",
              link: "/devops/aws_node_deployment",
            },
          ],
        },

        {
          label: "Tips and Tools",
          items: [
            {
              label: "Regular Expressions in Javascript",
              link: "/tipsandtools/regularexpressions/",
            },
            {
              label: "HTTP Response Status Codes",
              link: "/tipsandtools/httpresponsestatuscode/",
            },
          ],
        },
      ],
    }),
  ],
});
