import React, { createContext, useContext, useState } from "react";

type SidebarContextType = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType>({
	isOpen: true,
	toggleSidebar: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
