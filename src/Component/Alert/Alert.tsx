import React, { ReactNode } from 'react'
interface Props {
    // message: string;
    children: ReactNode;
}

function Alert(props: Props) {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
                <strong>{props.children}</strong>

            </div>
        </div>
    )
}

export default Alert