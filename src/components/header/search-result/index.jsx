import './SearchResult.scss'

function SearchResult (props) {
    const productResults = props.result;
    return (
        <div className='search-result-wrapper'>
            <div className='search-result_content'>
            
                <ul>
                    {productResults && productResults.map((result)=> {
                        return <li><a href="/">{result.product_name}</a></li>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchResult;