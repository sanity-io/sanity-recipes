# Do something with a uploaded file and populate a field in the document based on that

Consider the following schema, where we describe a route with a gpx map file of some sort, and we want to populate a field "bounds" in that document computed from the uploaded file.

## The schema

```
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

```
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

function computeBounds(document) {
  const assetId = document.map.mapfile.asset._ref;
  const documentId = document._id;
  return sanityClient.getDocument(assetId).then(asset => {
    console.log("Computing bounds for map file");
    const { url } = asset;
    // Fetch file, and compute bounds here then return the result
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

  state = {
    mapFileUploaded: false
  };

  firstFieldInput = React.createRef();

  handleFieldChange = (field, fieldPatchEvent) => {
    const { onChange, type, document } = this.props;

    // Test if change involves a mapfile, and if it does, look for upload progress with a value of 100 (%)
    if (
      field.name === "mapfile" &&
      fieldPatchEvent.patches.find(
        patch =>
          patch.type === "set" &&
          patch.path[1] === "progress" &&
          patch.value === 100
      )
    ) {
      this.setState({ mapFileUploaded: true });
    }

    // If we previously have discovered that a file is uploaded,
    // wait for the patches that inserts the asset reference in the document
    if (
      field.name === "mapfile" &&
      this.state.mapFileUploaded &&
      document.map.mapfile.asset
    ) {
      // Set the mapFileUploaded state to false first so this doesn't happen more than once
      this.setState({ mapFileUploaded: false }, () => {
        computeBounds(document).then(bounds => {
          onChange(PatchEvent.from([set(JSON.stringify(bounds), ["bounds"])]));
        });
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