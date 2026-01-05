// @ts-expect-error just importing forms
import forms from "@tailwindcss/forms";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [forms],
};
