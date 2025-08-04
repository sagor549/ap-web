"use client";

import { useProjectStore } from "@/lib/zustand/stores/project-store";
import { projects } from "@/data/projects";
import { motion } from "motion/react";

export default function ProjectList() {
  const { currentProject, setCurrentProject } = useProjectStore();

  return (
    <ul className="flex flex-wrap gap-2 mb-8">
      {projects.map((project, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, scale: 0.85, y: "50%" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="cursor-pointer"
        >
          <button
            type="button"
            onClick={() => setCurrentProject(projects[index])}
            className={`px-3 pt-2 pb-2.5 rounded-full text-sm font-medium tracking-tight transition-colors duration-300 group ${
              currentProject.title === project.title
                ? "bg-neutral-900 text-neutral-50"
                : "bg-neutral-900/10 text-neutral-900"
            }`}
            aria-label={`Filter by ${project.title}`}
            aria-pressed={currentProject.title === project.title}
            role="button"
          >
            <div className="overflow-hidden h-5">
              <div className="flex flex-col group-hover:-translate-y-1/2 transition-transform duration-300">
                <span>{project.title}</span>
                <span>{project.title}</span>
              </div>
            </div>
          </button>
        </motion.li>
      ))}
    </ul>
  );
}
