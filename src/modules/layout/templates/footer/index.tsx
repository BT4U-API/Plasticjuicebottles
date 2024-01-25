"use-client"
// import { Text, clx } from "@medusajs/ui"

// import { getCategoriesList, getCollectionsList } from "@lib/data"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "../../components/medusa-cta"
// import cisceo from "../../../../assests/Ciseo_logo.svg"
// import Image from "next/image"

// const fetchCollections = async () => {
//   const { collections } = await getCollectionsList()
//   return collections
// }

// const fetchCategories = async () => {
//   const { product_categories } = await getCategoriesList()
//   return product_categories
// }

// export default async function Footer() {
//   const productCollections = await fetchCollections().then(
//     (collections) => collections
//   )
//   const productCategories = await fetchCategories().then(
//     (categories) => categories
//   )

//   const socialItems = [{logo:"insta",title:"Facebook"},{logo:"insta",title:"Facebook"},{logo:"insta",title:"Facebook"},
//                       {logo:"insta",title:"Facebook"}]


//   const divItem1 = [{title:"Release Notes"},{title:"Upgrade Guide"},{title:"Browser Support"},{title:"Dark Mode"}]
//   const divItem2 = [{title:"Prototyping"},{title:"Designing Systems"},{title:"Pricing"},{title:"Security"}]
//   const divItem3 = [{title:"Best Practices"},{title:"Support"},{title:"Developers"},{title:"Learn Design"}]
//   const divItem4 = [{title:"Discussion Forms"},{title:"Code of Conduct"},{title:"Contributing"},{title:"Api Reference"}]



//   return (<div className="bg-red-200 flex h-80 justify-evenly">
//     <div className="bg-amber-500 flex-1 self-center gap-0.5 text-center">
//      <div>
//       <Image src={cisceo.src} width={120}  height={130} alt="logo"/>
//      </div>
//      {socialItems.map((item)=>{
//         return <li className="list-none text-left">{item.title}</li> 
//      })}
//     </div>
//     <div className="bg-red-500 flex-1 self-center gap-0.5 text-left"><h1 className=" font-semibold">Getting Started</h1>
//     {divItem1.map((item)=>{
//         return <li className="list-none text-left text-sm leading-5">{item.title}</li> 
//      })}
//     </div>
//     <div className="bg-amber-500 flex-1 self-center gap-0.5 text-left"><h1 className=" font-semibold">Explore</h1>
//     {divItem2.map((item)=>{
//         return <li className="list-none text-left text-sm leading-9">{item.title}</li> 
//      })}
//     </div>
//     <div className="bg-red-500 flex-1 self-center gap-0.5 text-left"><h1 className=" font-semibold">Resources</h1>
//     {divItem3.map((item)=>{
//         return <li className="list-none text-left text-sm leading-9">{item.title}</li> 
//      })}
//      </div>
//     <div className="bg-amber-500 flex-1 self-center gap-0.5 text-left gap-y-1"><h1 className=" font-semibold">Community</h1>
//     {divItem4.map((item)=>{
//         return <li className="list-none text-left text-sm hover:text-black leading-9">{item.title}</li> 
//      })}
//      </div>
//   </div>
//   )
// }



import Logo from "../../../../assests/Ciseo_logo.svg"
// import Logo from "../../../../assests/Logo.png";
// import SocialsList1 from "shared/SocialsList1/SocialsList1";
// import { CustomLink } from "data/types";
import React from "react";
import SocialsList1 from "../sociallist/SocialList";
import Image from "next/image";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  // menus: CustomLink[];
  menus: any;
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Getting started",
    menus: [
      { href: "#", label: "Release Notes" },
      { href: "#", label: "Upgrade Guide" },
      { href: "#", label: "Browser Support" },
      { href: "#", label: "Dark Mode" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "#", label: "Prototyping" },
      { href: "#", label: "Design systems" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Security" },
    ],
  },
  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "#", label: "Best practices" },
      { href: "#", label: "Support" },
      { href: "#", label: "Developers" },
      { href: "#", label: "Learn design" },
    ],
  },
  {
    id: "4",
    title: "Community",
    menus: [
      { href: "#", label: "Discussion Forums" },
      { href: "#", label: "Code of Conduct" },
      { href: "#", label: "Contributing" },
      { href: "#", label: "API Reference" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-gray-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item:any, index:number) => (
            <li key={index}>
              <a
                key={index}
                className="text-gray-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
           <div className="col-span-2 md:col-span-1 ml-12">
            <Image src={Logo.src} width={140} height={130} alt="Cisceo"/>
            {/* <span className="text-black font-bold text-xl">PlasticJuicebottles</span> */}
          </div> 
          <div className="col-span-2 flex items-center ml-20 md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;





// Medusa default footer =====>

{/* <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {productCollections && productCollections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (productCollections?.length || 0) > 3,
                    }
                  )}
                >
                  {productCollections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer> */}