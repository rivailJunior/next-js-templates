"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { env } from "@/config/env";

/**
 * Renders a heading component that displays a welcome message with the current pathname.
 *
 * @return {JSX.Element} The rendered heading component.
 */
export function WelcomeMessage() {
  const pathname = usePathname();

  return <h1 className="text-3xl font-bold">{env.WELCOME_MESSAGE}</h1>;
}
