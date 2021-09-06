import { getPosts } from "../services/StarWarsAPI";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";
import { useState } from "react"

const SpeciesPage = () => {
    const [page, setPage] = useState(1);

    const { data, error, isError, isLoading, isPreviousData } = useQuery(
        ["species", page],
        () => getPosts("species", page),
        {
            staleTime: 1000 * 60 * 5, // 5 mins
            cacheTime: 1000 * 60 * 30, // 30 mins
            keepPreviousData: true, // keep previous data
        }
    )

    return(
        <div>
            <h1>SpeciesPage</h1>
            {!data && <></>}

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error}</p>}

            {data && (
                data.starWarsData.map((specie, i) => (
                    <p key={i}>{specie.name}</p>
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

export default SpeciesPage;