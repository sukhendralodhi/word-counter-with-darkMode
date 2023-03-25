import React from "react";

const Alert = (props) => {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert &&
        <div>
            <div className="text-green-600 px-4 py-2 bg-red-100">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>
    );
}

export default Alert;