import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html lang='fr-FR' {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {props.headComponents}
        <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/be2491f54097d34644dc66b3b/8e76913955ae9b08e5302a684.js");</script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key='body' id='___gatsby' dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
