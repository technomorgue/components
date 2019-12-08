import React from 'react'
import FormLabel from 'react-bootstrap/FormLabel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  /** Text to display in label */
  text: string
  /** Title of the label. */
  title?: string // Use on required input labels to override default required title
  /** Give option to disable  */
  htmlFor?: string | ''
  /** Defines whether input is required. */
  isRequired?: boolean
}
/**
 *  Svg instead of asterisk to avoid asterisk being read by screenreaders
 *  hidden text to be read explaing the input is required incase the title attribute
 *  is not supported by the screen reader
 */
const asterisk = React.createElement('i', { style: { color: 'red' } }, [
  <FontAwesomeIcon
    icon="asterisk"
    key="asterisk"
    style={{ height: '7px', verticalAlign: 'top', marginLeft: '2px' }}
  />,
])
/**
 * Labels are used to display text
 */
const Label = (props: Props) => {
  const { text, htmlFor, isRequired, title } = props
  /** Form label for required inputs */
  if (isRequired) {
    return (
      <div>
        <FormLabel htmlFor={htmlFor} title={title || 'This is a required input'}>
          {text}
          {asterisk}
        </FormLabel>
      </div>
    )
  }
  /** Default form label  */
  return (
    <FormLabel htmlFor={htmlFor} title={title}>
      {text}
    </FormLabel>
  )
}
Label.defaultProps = {
  title: '',
}
export { Label }
