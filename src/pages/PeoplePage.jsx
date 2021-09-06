import { getPosts } from "../services/StarWarsAPI";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react"

const PeoplePage = () => {
    const [page, setPage] = useState(1);

    const { data, error, isError, isLoading, isPreviousData } = useQuery(
        ["people", page],
        () => getPosts("people", page),
        {
            staleTime: 1000 * 60 * 5, // 5 mins
            cacheTime: 1000 * 60 * 30, // 30 mins
            keepPreviousData: true, // keep previous data
        }
    )

    useEffect(() => {
        console.log("data", data)
    }, [data])

    return(
        <div>
            <h1>PeoplePage</h1>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                data.starWarsData.map((people, i) => (
                    <p key={i}>{people.name}</p>
                ))
            )}

            <div>
                <Button onClick={() => setPage(
                    (currentPage) => Math.max(currentPage - 1, 1))} disabled={page === 1}>
                    Previous Page
                </Button>
                <span>Current Page: {page}</span>

                <Button onClick={() => {
                    if (!isPreviousData && data.results.next) {
                        setPage((currentPage) => currentPage + 1);
                    }
                }}
                    // Disable the Next Page button until we know a next page is available
                    disabled={isPreviousData || !data?.results.next}>
                    Next Page
                </Button>
            </div>
        </div>
    )
}

export default PeoplePage;