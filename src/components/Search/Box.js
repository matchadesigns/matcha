/** @jsx jsx */
import {useId} from 'react'
import {jsx, Input, Flex} from 'theme-ui'
import {useSearchBox} from 'react-instantsearch'
import {IoMdSearch} from 'react-icons/io'

export const Box = ({onFocus}) => {
  const {query, refine} = useSearchBox()
  const id = useId()
  return (
    <Flex
      as='form'
      role='search'
      noValidate
      onSubmit={e => e.preventDefault()}
      sx={{
        bg: 'white',
        borderRadius: 4,
        maxWidth: '320px',
        touchAction: 'none'
      }}
    >
      <label
        htmlFor={id}
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          pl: 2,
          touchAction: 'none'
        }}
      >
        <Input
          name='search'
          id={id}
          type='search'
          placeholder='Rechercher'
          aria-label='Rechercher'
          value={query}
          onChange={e => refine(e.target.value)}
          onFocus={onFocus}
          autoComplete='off'
          sx={{bg: 'white', border: 0, color: 'text', fontSize: '16px', touchAction: 'none'}}
        />
        <IoMdSearch size={32} sx={{color: 'text'}} aria-hidden='true' />
      </label>
    </Flex>
  )
}
