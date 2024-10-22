// eslint-disable-next-line @typescript-eslint/no-unused-vars
const websitePaths = ["/", "/about", "/contact", "/register"] as const;

export type WebsitePath = (typeof websitePaths)[number];
