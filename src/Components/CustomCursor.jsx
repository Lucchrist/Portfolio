import { useState, useEffect } from "react";
import "../Styles/Components/_cursor.scss";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); // Gère l'état du clic

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseDown = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100); // Rétablit l'état après 150ms
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicked ? "clicked" : ""}`}
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
