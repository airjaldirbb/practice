"use client";
import { use } from "react"
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/Breadcrumbs";
function toPascalCase(str) {
  const cleaned = str
    .replace(/dedicated-?|server/gi, "")    
    .trim();

  return cleaned
    .split(/[-_ ]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
const componentsMap = {
    Germany: dynamic(() => import("../germany")),
  // Add more mappings here
};
export default function DedicatedServerPage({ params }) {
  const { slug } = use(params);
  const componentKey = toPascalCase(slug); 
  const ServerComponent = componentsMap[componentKey];

  if (!ServerComponent) {
    return <div>Component not found for {slug}</div>;
  }

  return (
    <>
          <ServerComponent />
       <Breadcrumbs />

    </>
  );}
