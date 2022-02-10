import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing = false,
    children,
}) {
    return (
        <button
            type={type}
            className={
                (processing ? " opacity-25 " : "") + "relative " + className
            }
            disabled={processing}
        >
            {processing && (
                <div className="absolute inset-0 grid place-items-center">
                    <div>
                        <svg
                            className={" h-5 w-5 animate-spin"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                </div>
            )}
            <span className={processing ? "invisible" : ""}>{children}</span>
        </button>
    );
}
// className={
//     `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
//         processing && 'opacity-25'
//     } ` + className
// }
