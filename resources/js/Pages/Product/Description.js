import { BodyText, Heading5 } from "@/Components/Elements";
import React from "react";

const Description = () => {
    return (
        <div>
            <Heading5 className="mb-4">Description</Heading5>
            <table className="mb-2 font-text ">
                <tbody>
                    <tr>
                        <td>
                            <div className="mr-2 font-medium">Peso</div>
                        </td>
                        <td>1kg</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="mr-2 font-medium">Dimensiones</div>
                        </td>
                        <td>15 × 15 × 20 cm</td>
                    </tr>
                </tbody>
            </table>
            <p className="font-text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>
    );
};

export default Description;
