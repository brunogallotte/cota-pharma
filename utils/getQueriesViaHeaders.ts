import { headers } from "next/headers";

const getQueriesViaHeaders = async (headersProps?: Readonly<Headers>) => {
  try {
    const headersList = headersProps || await headers();
    const queriesHeader = headersList.get("x-queries");
    
    if (!queriesHeader) {
      return {};
    }

    const parsedQueries = new URLSearchParams(queriesHeader);
    return Object.fromEntries(parsedQueries);
  } catch (error) {
    console.error("Error parsing queries from headers:", error);
    return {};
  }
};

export default getQueriesViaHeaders;
