import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
const SelectQuantity = ({ quantity = 1, limit = 10, onChange }) => {
    return (
        <>
            <div className="inline-flex items-stretch  ">
                <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => onChange(quantity - 1)}
                    className="flex items-center py-1 px-3 text-black   disabled:cursor-auto disabled:text-gray-300"
                >
                    <MinusIcon className="h-4 w-4 " />
                </button>

                <div className=" bg-orange-50 py-2 px-5">{quantity}</div>

                <button
                    type="button"
                    disabled={quantity >= limit}
                    onClick={() => onChange(quantity + 1)}
                    className="flex items-center py-1 px-3 text-black   disabled:cursor-auto disabled:text-gray-300"
                >
                    <PlusIcon className="h-4 w-4" />
                </button>
            </div>
        </>
        // <select value={quantity} className="w-full font-bold" onChange={onChange}>
        //     {optionValues}
        // </select>
    );
};

export default SelectQuantity;
