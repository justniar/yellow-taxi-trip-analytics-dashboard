import { Component, ErrorInfo, PropsWithChildren } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren<{}>, ErrorBoundaryState> {
    constructor(props: PropsWithChildren<{}>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
