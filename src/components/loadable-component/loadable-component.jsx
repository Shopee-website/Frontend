import React, { lazy, Suspense } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
// import './loadable-component.scss'

export const Loading = (
    <div className="animation-container">
        <LoadingOutlined />
    </div>
)

const LoadableComponent = (func) => {
    const Component = lazy(func)

    return (props) => (
        <Suspense fallback={Loading}>
            <Component {...props} />
        </Suspense>
    )
}

export default LoadableComponent;