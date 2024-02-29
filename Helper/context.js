
import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}`,

  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-02', // use current date (YYYY-MM-DD) to target the latest API version
  token: `${process.env.NEXT_PUBLIC_SANITY_STUDIO_SECRET_TOKEN}`,
})

export const builder = imageUrlBuilder(client)


// export let members;
// export async function getServerSideProps(context) {
//   const client = createClient({
//     projectId: '08dz2avh',
//     dataset: 'production',
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: '2024-02-02', // use current date (YYYY-MM-DD) to target the latest API version
//     // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
//   })

//   // const query = `*[_type == "member"]`;

//   members = await client.fetch('*[_type == "members"]');

//   return {
//     props: {
//       members,
//     },
//   };
// }

// // sanity.js
// import {createClient} from '@sanity/client'
// // Import using ESM URL imports in environments that supports it:
// // import {createClient} from 'https://esm.sh/@sanity/client'

// import { createContext } from 'react';
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: '08dz2avh',
//   dataset: 'production',
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2024-02-02', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// })

// export const builder = imageUrlBuilder(client)


// // uses GROQ to query content: https://www.sanity.io/docs/groq
// // export async function getAll() {
// //   const all = await client.fetch('*')
// //   return all
// // }
// export const Projects= createContext(await client.fetch('*[_type == "projects"]'))
// export const Events= createContext(await client.fetch('*[_type == "events"]'))
// export const Alumni= createContext(await client.fetch('*[_type == "alumni"]'))
// export const Members= createContext(await client.fetch('*[_type == "members"]'))
// export  const LevelContext = createContext(await client.fetch('*')
// // export const Achievement= createContext(await client.fetch('*[_type == "achievements"]'))
// // console.log(Achievement);
// );