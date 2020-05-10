/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState, useEffect, useCallback, useRef} from 'react'
import algoliasearch from 'algoliasearch/lite'
import {InstantSearch, Configure, Index, InfiniteHits, connectStateResults} from 'react-instantsearch-dom'
import {Box} from './Box'
import * as hitComps from './Hits'
import onClickOutside from 'react-onclickoutside'

const Results = connectStateResults(
  ({searchState: state, searchResults: res, children}) => (res && res.nbHits > 0 ? children : null) // state.query ? `Pas de résultat pour '${state.query}'` : null
)
const Stats = connectStateResults(
  ({searchResults: res}) => res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? 's' : ''}`
)
const useEscKey = handler => {
  const detectEscKey = useCallback(
    event => {
      if (event.keyCode === 27) {
        handler()
      }
    },
    [handler]
  )
  useListenerOn(['keydown'], detectEscKey)
}

const useListenerOn = (events, detection) => {
  useEffect(() => {
    for (const event of events) document.addEventListener(event, detection, false)
    return () => {
      for (const event of events) document.removeEventListener(event, detection, false)
    }
  })
}

function Search ({indices, collapse}) {
  const ref = useRef()
  const [query, setQuery] = useState('')
  const [focus, setFocus] = useState(false)
  const algoliaClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY)
  const searchClient = {
    search (requests) {
      if (requests.every(({params}) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0
          }))
        })
      }
      return algoliaClient.search(requests)
    }
  }
  Search.handleClickOutside = () => setFocus(false)
  useEscKey(() => setFocus(false))
  return (
    <div ref={ref} sx={{width: 'full', mt: [0, 0, 0, 2]}}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({query}) => setQuery(query)}
      >
        <Configure hitsPerPage={4} />
        <Box onFocus={() => setFocus(true)} {...{collapse, focus}} />
        <div
          // show={query && query.length > 0 && focus}
          // asGrid={hitsAsGrid}
          sx={{
            display: query && query.length > 0 && focus ? 'grid' : 'none',
            maxHeight: '80vh',
            overflow: 'scroll',
            overflowX: 'hidden',
            zIndex: 2,
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
            }
          }}
        >
          {indices.map(({name, title, hitComp}) => (
            <Index key={name} indexName={name}>
              <Results>
                <InfiniteHits
                  hitComponent={hitComps[hitComp](() => setFocus(false))}
                  translations={{
                    loadPrevious: 'Résultats précédents',
                    loadMore: 'Résultats suivants'
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

const clickOutsideConfig = {
  handleClickOutside: () => Search.handleClickOutside
}

export default onClickOutside(Search, clickOutsideConfig)
