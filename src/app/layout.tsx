import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <footer className="border-t border-fd-border py-2 mt-auto">
          <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-fd-muted-foreground">
            <div className="flex items-center gap-3">
              <img
                src="https://github.com/quochuydev.png"
                alt="Huy Pham"
                className="w-6 h-6 rounded-full"
              />
              <span>
                Built by{" "}
                <a
                  href="https://github.com/quochuydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-fd-foreground hover:underline"
                >
                  Huy Pham
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://quochuy.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-foreground transition-colors"
              >
                quochuy.dev
              </a>
              <a
                href="https://cappuai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fd-foreground transition-colors"
              >
                cappuai.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
