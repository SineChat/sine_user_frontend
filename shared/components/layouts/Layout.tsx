"use client";

import MainLayout from "./MainLayout";
import NoLayout from "./NoLayout";


export const Layouts = {
  Login: NoLayout,
  Main: MainLayout,
};

export type LayoutKeys = keyof typeof Layouts;