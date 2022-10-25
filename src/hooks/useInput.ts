import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

const useInput = (initValue: number | string) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [
    string | number,
    onChangeType,
    typeof setValue
  ];
};

export default useInput;
