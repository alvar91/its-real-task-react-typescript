import { useReducer } from "react";

function useHookReducer<T>(
  defaultVal: T,
  reducer: (state: T, action: any) => T
) {
  const [state, dispatch]: [state: T, dispatch: React.Dispatch<any>] =
    useReducer(reducer, defaultVal);

  return { state, dispatch };
}
export { useHookReducer };
