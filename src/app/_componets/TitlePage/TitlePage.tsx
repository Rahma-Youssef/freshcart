"use client";

import { useEffect } from "react";

interface TitlePageProps {
  title: string; 
}

const TitlePage = ({ title }: TitlePageProps) => {
  useEffect(() => {
    document.title = `${title} | FreshCart`;
  }, [title]);

  return null; 
};

export default TitlePage;
