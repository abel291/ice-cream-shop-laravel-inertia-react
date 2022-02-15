import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import Layout from "./Layout";


const ChangePassword = () => {
    const { data, setData, processing, post, errors, reset } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("store_change_password"), {
            preserveScroll: true,
            onSuccess: () =>
                reset("current_password", "password", "password_confirmation"),
        });
    };
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    // useEffect(() => {
    //     return () => {};
    // }, []);
    return (
        <Layout title="Cambiar contraseña">
            <ValidationErrors errors={errors} />
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-4">
                    <div>
                        <Label
                            forInput="current_password"
                            value="Contraseña Actual *"
                        />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.current_password}
                            name="current_password"
                        />
                    </div>

                    <div>
                        <Label forInput="password" value="Contraseña nueva *" />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.password}
                            name="password"
                        />
                    </div>
                    <div>
                        <Label
                            forInput="password_confirmation"
                            value="Confirmar contraseña nueva *"
                        />
                        <Input
                            className="w-full mt-1"
                            required={true}
                            type="password"
                            handleChange={onHandleChange}
                            value={data.password_confirmation}
                            name="password_confirmation"
                        />
                    </div>
                </div>
                <Button  processing={processing}>Guardar</Button>
            </form>
        </Layout>
    );
};

export default ChangePassword;
