import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [forms],
}

export default config;