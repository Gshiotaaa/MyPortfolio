import { createContext, ReactNode, useState } from "react";

interface ViewPortContextType {
  visibleSection: VisibleSection;
  setVisibleSection: React.Dispatch<React.SetStateAction<VisibleSection>>;
}

export interface VisibleSection {
  home: boolean;
  skills: boolean;
  projects: boolean;
}

interface ViewPortProviderProps {
  children: ReactNode;
}

export const ViewPortContext = createContext({} as ViewPortContextType);

export function ViewPortProvider({ children }: ViewPortProviderProps) {
  const [visibleSection, setVisibleSection] = useState<VisibleSection>({
    home: true,
    skills: false,
    projects: false,
  });

  return (
    <ViewPortContext.Provider value={{ visibleSection, setVisibleSection }}>
      {children}
    </ViewPortContext.Provider>
  );
}
