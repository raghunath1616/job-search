import React from "react"

const AsyncComponentWrapper = (getComponent, Loader = null, type) => class AsyncComponent extends React.Component {
    state = { Component: null }

    componentDidMount() {
      /**
       * do not use this.isMounted. Its a reserved keyword
       * in react
       */
      this.isMountedComp = true
      const { Component } = this.state
      if (!Component) {
        getComponent().then((Comp) => {
          if (this.isMountedComp) {
            this.setState({ Comp })
          }
        })
      }
    }

    componentWillUnmount() {
      this.isMountedComp = false
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      if (Loader) {
        return Loader
      }
      return null
    }
}

export default AsyncComponentWrapper
