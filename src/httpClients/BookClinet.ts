type ResponseBookContract = {
    id: number;
    name: string;
    author_id: number;
}

export type ResponseBooksContract = {
    res: ResponseBookContract[];
}

type BookClient = {
    getBooks: () => Promise<ResponseBooksContract>;
}

class BookClientImpl implements BookClient {

    public static instance = new BookClientImpl();

    private constructor() { }

    public readonly getBooks = async (): Promise<ResponseBooksContract> => {
        const url = "https://8000-cs-215942731427-default.cs-asia-east1-vger.cloudshell.dev/books";

        const response = await fetch(url, {});

        const content = await response.json() as ResponseBooksContract;
        console.log(content);
        return content;
    };
};

export const bookClient: BookClient = BookClientImpl.instance;