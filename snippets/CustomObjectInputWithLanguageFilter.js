import PropTypes from 'prop-types'
import React from 'react'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import {setIfMissing} from 'part:@sanity/form-builder/patch-event'
import {FormBuilderInput} from 'part:@sanity/form-builder'
import filterFieldFn$ from 'part:@sanity/desk-tool/filter-fields-fn?'

export default class CustomObjectInput extends React.PureComponent {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string
    }).isRequired,
    level: PropTypes.number,
    value: PropTypes.shape({
      _type: PropTypes.string
    }),
    focusPath: PropTypes.array.isRequired,
    onFocus: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
  }

  state = {
    filterField: () => true
  }

  firstFieldInput = React.createRef()

  handleFieldChange = (field, fieldPatchEvent) => {
    const {onChange, type} = this.props
    onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({_type: type.name})))
  }

  focus() {
    this.firstFieldInput.current.focus()
  }

  componentDidMount(props) {
    if (filterFieldFn$) {
      this.filterFieldFnSubscription = filterFieldFn$.subscribe(filterField =>
        this.setState({filterField})
      )
    }
  }
  componentWillUnmount(props) {
    if (this.filterFieldFnSubscription) {
      this.filterFieldFnSubscription.unsubscribe()
    }
  }

  render() {
    const {type, value, level, focusPath, onFocus, onBlur} = this.props
    const {filterField} = this.state
    return (
      <Fieldset level={level} legend={type.title} description={type.description}>

        Custom input, yeah!

        <div>
          {type.fields.map((field, i) => (
            <FormBuilderInput
              level={level + 1}
              ref={i === 0 ? this.firstFieldInput : null}
              key={field.name}
              type={field.type}
              value={value && value[field.name]}
              onChange={patchEvent => this.handleFieldChange(field, patchEvent)}
              path={[field.name]}
              focusPath={focusPath}
              onFocus={onFocus}
              onBlur={onBlur}
              filterField={filterField}
            />
          ))}
        </div>
      </Fieldset>
    )
  }
}