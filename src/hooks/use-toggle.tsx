import { useState } from "react";

export function useToggle() {
  const [value, setValue] = useState<boolean>(false);
  const toggle = () => {
    setValue(!value);
  };
  return {
    value,
    setValue,
    toggle,
  };
}
