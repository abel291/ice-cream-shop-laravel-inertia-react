const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: "2rem",
                md: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Oswald", ...defaultTheme.fontFamily.sans],
                script: ["Sacramento", ...defaultTheme.fontFamily.sans],
                text: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
