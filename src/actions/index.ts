"use server";

import { deleteRouteById } from "@/prisma";
import { redirect } from "next/navigation";

export const redirectToLocation = (location: string) => {
  return redirect(location);
};

export const deleteRouteByIdAction = (routeId: string) => {
  return deleteRouteById(routeId);
};
