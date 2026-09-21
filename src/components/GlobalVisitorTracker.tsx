import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackCurrentVisitor, initVisitorTracker } from "@/lib/visitor-tracker";

export function GlobalVisitorTracker() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname + (routerState.location.hash || "");

  useEffect(() => {
    initVisitorTracker();
  }, []);

  useEffect(() => {
    // Avoid logging admin navigation as customer visits
    if (!currentPath.startsWith("/admin")) {
      void trackCurrentVisitor(currentPath);
    }
  }, [currentPath]);

  return null;
}
