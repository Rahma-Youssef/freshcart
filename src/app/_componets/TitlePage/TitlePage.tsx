// components/TitlePage.tsx
"use client";

import { useEffect } from "react";

interface TitlePageProps {
  title: string; // العنوان اللي عايزة تحطيه
}

const TitlePage = ({ title }: TitlePageProps) => {
  useEffect(() => {
    document.title = `${title} | FreshCart`;
  }, [title]);

  return null; 
};

export default TitlePage;
