import type {Metadata} from "next";
import "./globals.css";
import PaginaSquirtle from "@/components/PaginaSquirtle/paginaSquirtle";

export const metadata: Metadata = {
  title: "Squirtle - React",
  description: "Site do Squirtle em React",
};

export default function RootLayout() {
  return (
    <html lang="pt-br">
      <body>{<PaginaSquirtle/>}</body>
    </html>
  );
}
