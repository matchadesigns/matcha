/* eslint-disable react/display-name */
/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {Highlight, Snippet} from 'react-instantsearch-dom'
import {jsx} from 'theme-ui'

export const Post =
  clickHandler =>
  ({hit}) =>
    (
      <div>
        <Link to={'/blog' + hit.slug} onClick={clickHandler}>
          <h4>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h4>
        </Link>
        <div>
          &nbsp;
          <Highlight attribute="date" hit={hit} tagName="mark" />
          &emsp; &nbsp;
          {hit.tags.map((tag, index) => (
            <Fragment key={tag}>
              {index > 0 && ', '}
              {tag}
            </Fragment>
          ))}
        </div>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    )
