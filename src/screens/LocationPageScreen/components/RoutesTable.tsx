"use client";

import { GeneratedRouteWithAuthor, RouteRow } from "@/domains";
import { useRoutesTable } from "@/hooks";
import { Table } from "@/ui/organisms";
import { convertDateToString } from "@/utils";
import { useMemo } from "react";

interface RoutesTableProps {
  routes: GeneratedRouteWithAuthor[];
}

export function RoutesTable({ routes }: RoutesTableProps) {
  const convertedRoutes = useMemo(
    (): RouteRow[] =>
      routes?.map((route) => ({
        id: route.id,
        name: route?.detail?.name,
        distance: route?.detail?.distance,
        likes: 0, //todo
        elevation: route?.detail?.elevation,
        authorName: route?.author?.name ?? "",
        createdAt: convertDateToString(route?.createdAt) ?? "",
        interestingPlaces: route?.detail?.interestingPlaces,
      })),
    [routes]
  );

  const { table } = useRoutesTable(convertedRoutes);

  return (
    <Table
      headerCells={table?.getHeaderGroups()}
      bodyCells={table?.getRowModel()}
    />
  );
}
