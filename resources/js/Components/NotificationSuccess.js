import { CheckCircleIcon } from "@heroicons/react/solid";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useRef } from "react";

const NotificationSuccess = () => {
    const { flash } = usePage().props;
    const _isMounted = useRef(true);
    useEffect(() => {
        if (flash.success) {
            let divError = document.getElementById("success-message");
            scroll({
                top: divError.offsetTop - 50,
                behavior: "smooth",
            });
        }
        return () => {
            // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        };
    }, [flash.success]);

    return (
        flash.success && (
            <div
                id="success-message"
                className="flex items-start space-x-2 rounded-md bg-green-50 p-2 md:p-4"
            >
                <div>
                    <CheckCircleIcon className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-grow text-green-700">
                    <span className="block  font-text text-green-600">
                        {flash.success}
                    </span>
                </div>

                {/* <button
                type="button"
                onClick={(e) => setShow(false)}
                className="outline-none focus:outline-none"
            >
                <XIcon className="h-5 w-5 text-green-500" />
            </button> */}
            </div>
        )
    );
};

export default NotificationSuccess;
