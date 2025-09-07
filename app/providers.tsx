"use client";

import { LangProvider } from "./context/LangProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
