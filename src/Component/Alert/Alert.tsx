import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode;
    onClose: () => void;
}
function Alert(props: Props) {
    const handleClose = () => {
        props.onClose();
    };
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                ></button>
                <strong>{props.children}</strong>
            </div>
        </div>
    )
}
export default Alert