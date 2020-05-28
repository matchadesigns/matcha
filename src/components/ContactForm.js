/** @jsx jsx */
import {useForm, ValidationError} from '@statickit/react'
import {Alert, Box, Button, Input, jsx, Label, Textarea} from 'theme-ui'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('contact')
  if (state.succeeded) {
    return <Alert bg='primary'>Merci d'avoir pris contact avec nous ! Nous vous répondrons au plus vite.</Alert>
  }

  return (
    <Box
      as='form'
      id='contactForm'
      onSubmit={handleSubmit}
      sx={{
        width: ['100%'],
        p: 3,
        border: '1px solid',
        bg: 'primary',
        color: 'white'
      }}
    >
      <Box mb={3} sx={{}}>
        <Label htmlFor='email'>Votre email :</Label>
        <Input id='email' type='email' name='email' sx={{borderColor: 'white', borderRadius: 0}} />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </Box>
      <Box mb={3} sx={{}}>
        <Label htmlFor='message'>Votre message :</Label>
        <Textarea id='message' name='message' rows='6' mb={3} sx={{borderColor: 'white', borderRadius: 0}} />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
      </Box>
      <Button type='submit' disabled={state.submitting}>
        Contactez-nous !
      </Button>
    </Box>
  )
}
