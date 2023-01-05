import { useState } from "react";

export const usePagination = () => {
    const [total, setTotal] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);

    return {total, setTotal, offset, setOffset }
}