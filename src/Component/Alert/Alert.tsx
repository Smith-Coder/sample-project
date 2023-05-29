import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode;
    onClose: () => void;
}
function Alert(props: Props) {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => props.onClose()}
                ></button>
                <strong>{props.children}</strong>
            </div>
        </div>
    )
}
export default Alert