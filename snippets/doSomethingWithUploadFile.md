# Do something with a uploaded file and populate a field in the document based on that

Consider the following schema, where we describe a route with a gpx map file of some sort, and we want to populate a field "bounds" in that document computed from the uploaded file.

## The schema

```javascript
import RouteFileInput from "../components/RouteFileInput";
export default {
  name: "route",
  title: "Route",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Map",
      name: "map",
      type: "object",
      inputComponent: RouteFileInput,
      fields: [
        {
          title: "GPX file",
          name: "mapfile",
          type: "file",
        },
        {
          name: "bounds",
          title: "Bounds",
          description: "Will be populated by file upload",
          type: "string"
        }
      ]
    }
  ]
};
```

## The input component

```javascript
import PropTypes from "prop-types";
import React from "react";
import Fieldset from "part:@sanity/components/fieldsets/default";
import {
  setIfMissing,
  set,
  unset
} from "part:@sanity/form-builder/patch-event";
import { FormBuilderInput } from "part:@sanity/form-builder";
import { withDocument } from "part:@sanity/form-builder";
import sanityClient from "part:@sanity/base/client";
import { PatchEvent } from "part:@sanity/form-builder";

function computeBounds(asset) {
  return sanityClient.getDocument(asset._ref).then(asset => {
    console.log("Computing bounds for map file", asset.url);
    const { url } = asset;
    // Fetch file, and compute bounds here then return the result
    // (let's pretend it's done here for the sake of the example)
    return { north: 0, south: 10, west: 20, east: 40 };
  });
}

class CustomObjectInput extends React.PureComponent {
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
  };

  firstFieldInput = React.createRef();

  handleFieldChange = (field, fieldPatchEvent) => {
    const { onChange, type, document } = this.props;
    
    // If we see a set patch that sets the asset, use the file to compute the bounds
    const setAssetPatch = fieldPatchEvent.patches.find(
      patch =>
        patch.type === "set" &&
        patch.path.length === 1 &&
        patch.path[0] === "asset" &&
        patch.value &&
        patch.value._ref
    );
    if (field.name === "mapfile" && setAssetPatch) {
      computeBounds(setAssetPatch.value).then(bounds => {
        onChange(PatchEvent.from([set(JSON.stringify(bounds), ["bounds"])]));
      });
    }

    // If we see a patch that removes the map asset file, unset the bounds field
    if (
      fieldPatchEvent.patches.find(
        patch =>
          patch.type === "unset" &&
          patch.path.length === 1 &&
          patch.path[0] === "asset"
      )
    ) {
      onChange(PatchEvent.from([unset(["bounds"])]));
    }

    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    );
  };

  focus() {
    this.firstFieldInput.current.focus();
  }

  render() {
    const {
      document,
      type,
      value,
      level,
      focusPath,
      onFocus,
      onBlur
    } = this.props;
    return (
      <Fieldset
        level={level}
        legend={type.title}
        description={type.description}
      >
        <div>
          {type.fields.map((field, i) => (
            // Delegate to the generic FormBuilderInput. It will resolve and insert the actual input component
            // for the given field type
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
            />
          ))}
        </div>
      </Fieldset>
    );
  }
}

export default withDocument(CustomObjectInput);

```