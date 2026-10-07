/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState, useEffect, useMemo, useRef} from 'react'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch, Configure, Index, InfiniteHits, useInstantSearch} from 'react-instantsearch'
import {Box} from './Box'
import * as hitComps from './Hits'

const algoliaClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY)

// Skip the request to Algolia while the query is empty
const searchClient = {
  ...algoliaClient,
  search (requests) {
    if (requests.every(({params}) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: '',
          params: ''
        }))
      })
    }
    return algoliaClient.search(requests)
  }
}

const useDismiss = (ref, handler) => {
  useEffect(() => {
    const onPointer = event => {
      if (!ref.current || ref.current.contains(event.target)) return
      handler()
    }
    const onKey = event => {
      if (event.key === 'Escape') handler()
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('touchstart', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('touchstart', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [ref, handler])
}

const Results = ({children}) => {
  const {results} = useInstantSearch()
  return results && results.nbHits > 0 ? children : null
}

function Search ({indices}) {
  const ref = useRef()
  const [query, setQuery] = useState('')
  const [focus, setFocus] = useState(false)
  const close = useMemo(() => () => setFocus(false), [])
  // Hit components are built once so InfiniteHits doesn't remount them on every render
  const hitComponents = useMemo(
    () => Object.fromEntries(indices.map(({name, hitComp}) => [name, hitComps[hitComp](close)])),
    [indices, close]
  )
  useDismiss(ref, close)
  return (
    <div ref={ref} sx={{mt: 0}}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onStateChange={({uiState, setUiState}) => {
          setQuery(uiState[indices[0].name]?.query || '')
          setUiState(uiState)
        }}
        future={{preserveSharedStateOnUnmount: true}}
      >
        <Configure hitsPerPage={4} />
        <Box onFocus={() => setFocus(true)} />
        <div
          sx={{
            display: query && query.length > 0 && focus ? 'grid' : 'none',
            maxHeight: '80vh',
            overflow: 'scroll',
            overflowX: 'hidden',
            zIndex: 20,
            ':-webkit-overflow-scrolling': 'touch',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, .225)',
            borderRadius: 3,
            position: 'absolute',
            right: '2rem',
            top: '2rem',
            width: '80vw',
            maxWidth: '30em',
            padding: 2,
            color: 'text',
            bg: 'white',
            ul: {
              listStyle: 'none',
              padding: 0
            },
            mark: {
              color: 'primary',
              bg: 'brownWhite'
            },
            header: {
              display: 'flex',
              justifyContent: 'space-between',
              mb: 1
            },
            '.ais-InfiniteHits-loadPrevious--disabled, .ais-InfiniteHits-loadMore--disabled': {
              display: 'none'
            }
          }}
        >
          {indices.map(({name}) => (
            <Index key={name} indexName={name}>
              <Results>
                <InfiniteHits
                  hitComponent={hitComponents[name]}
                  showPrevious={false}
                  translations={{
                    showPreviousButtonText: 'Résultats précédents',
                    showMoreButtonText: 'Résultats suivants'
                  }}
                />
              </Results>
            </Index>
          ))}
          <PoweredBy />
        </div>
      </InstantSearch>
    </div>
  )
}

const PoweredBy = () => (
  <span sx={{display: 'inline-block', textAlign: 'right'}}>
    Recherche propulsée par <a href='https://algolia.com'>Algolia</a>
  </span>
)

export default Search
