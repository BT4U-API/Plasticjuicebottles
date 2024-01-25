"use client"
import { Popover, Transition } from "@headlessui/react"
import React, { useState } from 'react'
import { Button } from "@medusajs/ui"
import { Fragment } from "react"
import Thumbnail from '@modules/products/components/thumbnail'
import LocalizedClientLink from "@modules/common/components/localized-client-link"


const ExploreDropdown  = () => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

    const open = () => setCartDropdownOpen(true)
    const close = () => setCartDropdownOpen(false)


    const PopoverItems=[{title:"Home Demo 1"},
                        {title:"Home Demo 2"},
                        {title:"Home Demo 1"},
                        {title:"Home Demo 1"},
                        {title:"Home Demo 1"},
                        {title:"Home Demo 1"},
                        {title:"Home Demo 1"},
                        {title:"Home Demo 1"}
                        ]

  return (
    <div
    onMouseEnter={open}
    onMouseLeave={close}
    >
    <Popover>
        <Popover.Button  className="h-full gap-1  flex items-center">
          Explore
        </Popover.Button>

        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base"
          >
            <div className="p-4 flex flex-col items-center justify-center">
            {/* {PopoverItems.map((item,index)=>{
              return <h3 key={index} className="text-large-semi text-xs	text-grey-500">{item.title}</h3>
            })} */}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      </div>
  )
}

export default ExploreDropdown