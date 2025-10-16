export type TNextPageParams = Promise<{ [key: string]: string }>;
export type TNextPageSearchParams = Promise<{ [key: string]: string }>;

export type TNextPageParameters = { params: TNextPageParams; searchParams: TNextPageSearchParams };
export type TNextLayout = { children: React.ReactNode; params: TNextPageParams };
