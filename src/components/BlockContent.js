import {PortableText} from '@portabletext/react'
import React from 'react'
import components from './serializers'

export const BlockContent = ({blocks}) => {
  if (!blocks) return null
  return (
    <div>
      <PortableText value={blocks} components={components} />
    </div>
  )
}
