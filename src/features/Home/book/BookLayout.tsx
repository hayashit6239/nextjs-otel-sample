import { Flex, Text } from "@mantine/core";
import { FC, useEffect, useState } from "react"
import { bookClient } from "@/httpClients/BookClinet"

type book = {
    id: number;
    name: string;
    authorId: number;
}

const BookLayout: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState<book[]>([]);

    useEffect(() => {
        console.log(loadBooks(
            setIsLoading,
            setBooks,
        ));
    }, []);
    
    return (
        <Flex className="h-1/2">
            <Text className="text-xl">本一覧</Text>
        </Flex>
    );
};

const loadBooks = async (
    setIsLoading: (value: boolean) => void,
    setBooks: (value: book[]) => void,
) => {
    setIsLoading(true);
    try {
        const fetchBooks = await bookClient.getBooks();
        console.log(fetchBooks);
        // setBooks(fetchBooks.map(x => {

        // }));
    }
    catch (error) {
        console.error(error);
    }
    finally {
        setIsLoading(false);
    }
};

export default BookLayout;