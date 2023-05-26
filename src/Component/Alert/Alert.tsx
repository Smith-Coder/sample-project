import React, { ReactNode } from 'react'
interface Props {
    // message: string;
    children: ReactNode;
}

function Alert(props: Props) {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {/* {props.message} */}
                {props.children}

            </div>
        </div>
    )
}

export default Alert