import FlipMove from "react-flip-move"
import { urlFor } from "../sanity"
import Thumbnail from "./Thumbnail"

const Results = ({ result }) => {
    return(
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                result.map(res => (
                    <Thumbnail
                        key={res._id}
                        url={res.url}
                        thumbnail={urlFor(res.thumbnail.asset._ref).url()}
                        title="Math is fun"
                        description={res.description}
                        given={res.given}
                        completed={false}
                        reward={`${res.reward} ETH`}
                    />
                ))
            }
        </FlipMove>
    )
}

export default Results