import PropTypes from 'prop-types'
import React from 'react'
import client from 'part:@sanity/base/client'
import {PatchEvent, set, unset} from 'part:@sanity/form-builder/patch-event'

const DOCUMENT_ID = 'myConfigDocument'

class CustomStringListInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    type: PropTypes.object,
    onChange: PropTypes.func
  }
  handleChange = event => {
    if (!event.target.value) {
      this.props.onChange(PatchEvent.from(unset()))
      return
    }
    this.props.onChange(PatchEvent.from(set(event.target.value)))
  }

  state = {strings: []}

  componentDidMount() {
    client.getDocument(DOCUMENT_ID).then(document => {
      const strings = document.someArray.map(item => item.identifier)
      this.setState({strings})
    })
    this.subscription = client.listen(`*[_id == '${DOCUMENT_ID}']`).subscribe(changes => {
      this.setState({strings: changes.result.someArray.map(item => item.identifier)})
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscibe()
  }

  render() {
    const {value, type} = this.props
    return (
      <div>
        <h3>{type.title}</h3>
        <p>{type.description}</p>
        <select onChange={this.handleChange} value={value}>
          <option value="">Not set</option>
          {this.state.strings.map(string => {
            return (
              <option key={string} value={string}>
                {string}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default CustomStringListInput
