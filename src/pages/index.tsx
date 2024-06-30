import Image from "next/image";
import { Inter } from "next/font/google";
import { Flex } from "@mantine/core";
import BookLayout from "@/features/Home/book/BookLayout";
// import { AuthorLayout } from "@/features/Home/author/AuthorLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex direction="column" className="h-screen p-32">
        <BookLayout />
        
    </Flex>
  );
}
