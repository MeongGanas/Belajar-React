import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Voting App</title>
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
