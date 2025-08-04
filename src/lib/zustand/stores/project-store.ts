import { create } from "zustand";
import { Project, projects } from "@/data/projects";

interface ProjectStore {
  currentProject: Project;
  setCurrentProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  currentProject: projects[0],
  setCurrentProject: (currentProject) => set({ currentProject }),
}));
