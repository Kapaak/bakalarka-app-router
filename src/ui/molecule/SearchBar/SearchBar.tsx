"use client";

import NextLink from "next/link";

import { useState } from "react";

import { AutocompleteOption } from "@/domains";

import { Button, HorizontalStack } from "../../atoms";
import { Autocomplete } from "../Autocomplete";
import { redirectToLocation } from "@/actions";

interface SearchBarProps {
  options: AutocompleteOption[];
  placeholder?: string;
  baseRoute?: string;
}

export const SearchBar = ({
  options,
  placeholder,
  baseRoute = "/",
}: SearchBarProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const isValidLocation = selectedLocation.length > 0;

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const redirectWithLocation = redirectToLocation.bind(
    null,
    `${baseRoute}/${selectedLocation}`
  );

  return (
    <form action={redirectWithLocation}>
      <HorizontalStack className="gap-3 rounded-md bg-white px-4 py-2 shadow-regular">
        <Autocomplete
          placeholder={placeholder}
          options={options}
          onSelect={handleLocationSelect}
        />
        <NextLink
          href={isValidLocation ? `${baseRoute}/${selectedLocation}` : "/"}
        >
          <Button color="secondary">Najít</Button>
        </NextLink>
      </HorizontalStack>
    </form>
  );
};
