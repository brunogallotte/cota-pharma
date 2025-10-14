export default function addParamToURL(param: string, value: string) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.pushState({}, "", url);
  }
  
  export const addParamsToURL = (params: Record<string, string>) => Object.entries(params).forEach(([key, value]) => addParamToURL(key, value));
  
  export const removeParamFromURL = (param: string, config?: { reload?: boolean }) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.pushState({}, "", url);
  
    if (config?.reload) window.location.reload();
  };
  
  export const removeParamsFromURL = (params: string[], config?: { reload?: boolean }) => params.forEach((param) => removeParamFromURL(param, config));
  
  export const setParamsToURL = (params: Record<string, string | undefined | null>[], config?: { reload?: boolean }) => {
    const url = new URL(window.location.href);
    params.forEach((param) =>
      Object.entries(param).forEach(([key, value]) => {
        if (value === null || value === undefined) url.searchParams.delete(key);
        else url.searchParams.set(key, value);
      }),
    );
    window.history.pushState({}, "", url);
  
    if (config?.reload) window.location.reload();
  };
  