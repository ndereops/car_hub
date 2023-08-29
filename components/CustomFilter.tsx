"use client";

import React from "react";
import Image from "@/node_modules/next/image";
import { Fragment, useState } from "react";
import { useRouter } from "@/node_modules/next/navigation";
import { Transition } from "@/node_modules/@headlessui/react/dist/components/transitions/transition";
import { CustomFilterProps } from "@/types/index";
import { Listbox } from "@/node_modules/@headlessui/react/dist/components/listbox/listbox";
import { updateSearchParams } from "@/utils/index";

const CustomFilter = ({ title, options,setFilter }: CustomFilterProps) => {
  const [selected, setselected] = useState(options[0]);




  return (
    <div className=" w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setselected;
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className=" custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt=" chevron up down"
              className=" ml-4  object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom=" opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({
                    active,
                  }) => `relative cursor-default select-none
                    py-2 px-4 ${
                      active ? " bg-primary-blue text-white" : "text-gray-900"
                    }`}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium " : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
