import React, { Fragment } from 'react'

function CloseButton() {
  return (
    <Fragment>
      <div style={{ margin: "1px 1px 1rem   34rem" }}>
        {" "}
        <Button
          onClick={props.onClose}
          variant="danger"
          as="input"
          size="sm"
          type="submit"
          value="X"
        ></Button>
      </div>
    </Fragment>
  )
}

export default CloseButton
