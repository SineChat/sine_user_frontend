"use client";

import NoLayout from "./NoLayout";


export const Layouts = {
  Login: NoLayout,
};

export type LayoutKeys = keyof typeof Layouts;