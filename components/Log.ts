const info = (message: string, value: any = "", opts: { log?: boolean } = { log: true }) =>
    opts?.log && console.log(` \n [V-INFO] ${message} \n ${value ? "[JSON] " + JSON.stringify(value, null, 0) : ""} \n `);
  const error = (message: string, value: any = "", opts: { log?: boolean } = { log: true }) =>
    opts?.log && console.error(` \n [V-ERROR] ${message} \n ${value ? "[JSON] " + JSON.stringify(value, null, 0) : ""} \n `);
  const warn = (message: string, value: any = "", opts?: { log?: boolean }) =>
    opts?.log && console.warn(` \n [V-WARN] ${message} \n ${value ? "[JSON] " + JSON.stringify(value, null, 0) : ""} \n `);
  const debug = (message: string, value: any = "", opts: { log?: boolean } = { log: true }) =>
    opts?.log && console.log(` \n [V-DEBUG] ${message}\n ${value ? "[JSON] " + JSON.stringify(value, null, 0) : ""} \n `);
  
  const formatLogProcess = (type: string, message: string, opts: { scope?: number; topTreeParent?: boolean } = { scope: 24, topTreeParent: true }) => {
    const symbol = opts.topTreeParent ? " * " : "-";
    const scope = opts.scope || 24;
    return ` \n ${symbol.repeat(scope / 2)} V-${type}-LOG-PROCESS ${symbol.repeat(scope / 2)} ${message} - ${new Date().toLocaleString()} \n `;
  };
  
  const startLogProcess = (message: string, opts: { scope?: number; topTreeParent?: boolean; log?: boolean } = { scope: 24, topTreeParent: true, log: true }) =>
    opts.log && console.log(formatLogProcess("START", message, opts));
  
  const endLogProcess = (message: string, opts: { scope?: number; topTreeParent?: boolean; log?: boolean } = { scope: 24, topTreeParent: true, log: true }) =>
    opts.log && console.log(formatLogProcess("END", message, opts));
  
  const Log = { info, error, warn, debug, startLogProcess, endLogProcess };
  export default Log;
  