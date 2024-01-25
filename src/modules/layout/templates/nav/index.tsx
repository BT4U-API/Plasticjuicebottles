import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import cisceo from "../../../../assests/Ciseo_logo.svg"
// import Logo from "../../../../assests/Logo.png"
import { Button } from "@medusajs/ui"
import ExploreDropdown from "../Explore/ExploreDropdown"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group ">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white h-20 border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex justify-center">
              {/* <SideMenu regions={regions}/> */}
              <Image src={cisceo.src} alt="myimage"  className="p-3" width={150} height={350}/>
            </div>
          </div>

          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="text-sm font-medium	hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              Men
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="text-sm font-medium	 hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              Women
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="text-sm font-medium hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              Beauty
            </LocalizedClientLink>
             <LocalizedClientLink
              href="/"
              className="text-sm font-medium hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              Sport
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="text-sm font-medium hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              Templates
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="text-sm font-medium hover:text-ui-fg-base uppercase mx-1.5 p-4"
            >
              <ExploreDropdown/> 
            </LocalizedClientLink>
          </div>

          <div className="flex items-center  gap-x-6 h-full flex-1 basis-0 justify-center ">
            <div className="hidden small:flex items-center gap-1 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}

              <Button variant="transparent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Button>

              <Button variant="transparent">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </Button>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-1"
                  href="/cart"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
