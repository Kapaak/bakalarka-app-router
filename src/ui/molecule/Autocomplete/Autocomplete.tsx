"use client";

import { Fragment, useState } from "react";

import { AutocompleteOption } from "@/domains";
import { Combobox, Transition } from "@headlessui/react";
import { CheckCircle, MagnifyingGlass } from "@phosphor-icons/react";

export interface AutocompleteProps {
  options: AutocompleteOption[];
  placeholder?: string;
  onSelect(location: string): void;
}

export const Autocomplete = ({
  options = [],
  placeholder,
  onSelect,
}: AutocompleteProps) => {
  const [selected, setSelected] = useState<AutocompleteOption>({
    label: "",
    value: "",
  });
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSelect = (option: AutocompleteOption) => {
    setSelected(option);
    onSelect(option.value);
  };

  return (
    <div className="16 w-72 flex-1">
      <Combobox value={selected} onChange={(val) => handleSelect(val)}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlass
                className="h-5 w-5 text-main-orange"
                aria-hidden="true"
              />
            </Combobox.Button>
            <Combobox.Input
              min={3}
              className="w-full border-none py-2 pl-10 pr-10 text-base leading-5 text-gray-900 focus:outline-none"
              displayValue={(option: AutocompleteOption) => option.label}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute bottom-8 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm lg:bottom-auto">
              {filteredOptions.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nebyla nalezena žádná trasa.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.value}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-main-yellow text-black" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-main-yellow"
                            }`}
                          >
                            <CheckCircle
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
