import { useEffect } from "react";

export default function useKeyPress(key: string, handlePressKey: () => void) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === key) handlePressKey();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [key, handlePressKey]);
}
