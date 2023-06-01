/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '01': "370px",
        '001': "470px",
        '02': "570px",
        '03': "1070px",
        '04': "85vh",
        '05': "80vh"
      },
      backgroundImage: {
        refer: "url('https://res.cloudinary.com/das90kzig/image/upload/v1678511960/Refer_1_bphjfn.png')",
        list: "url('https://res.cloudinary.com/das90kzig/image/upload/v1678511951/Make_a_list_banner_1_1_ean22f.png')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      }
    },
  },
  plugins: [],
}
