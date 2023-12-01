import React, { Component } from "react";
import NotFound from "./NotFound";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDrivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    if (error) {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
