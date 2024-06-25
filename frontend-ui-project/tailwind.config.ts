import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            height: {
                '116.14px': '116.14px',
                '150px': '150px',
                '61px': '61px'
            },
            margin: {
                '40': '40px',
                '25.57': '25.57px',
                "19": "19px",
                '100': '100px',
                '72': '72px',
                '20px' : "20px",
                "12px" : "12px",
                '8px' : "8px",
                '32px' : "32px",
                '36px' : "36px",
                '45px' : "45px",
                "48px" : "48px",
                '16px' : '16px',
                "323" : "323px",
                "308" : "308px",
                "158" : "158px",
                "23px" : "23px"

            },
            textUnderlineOffset: {
                26: '26px',
            },
            width: {
                '100': '100px',
            },
            fontSize: {
                '20': '20px',
                '35':'35px',
                '14' : '14px',
                '12' : "12px",
                '16' : "16px"
            },
            backgroundColor: {
                "logo_bg": '#E7E7E7',
                "jobs_bg": "#DC4A2D",
                "open_badge_green" : "#ECFDF3",
                "dot_color_green" : "#17B26A",
                "dot_color_grey": "#D1D1D1",
                "Follow_bg" : "#E0EBF9",
                "delete_btn" : "#FEF4F2",
                "job_bg" : "#FCFCFC"
            },
            outlineColor:{
              "outline_badge" : "#ABEFC6",
                "delete_btn_outline" : "#DC4A2D"
            },
            colors: {
                "logo_orange": "#D92D20",
                "under_nav_txt_color" : "#888888",
                "loc_txt_color" : "#5D5D5D",
                "description_txt" : "#828282",
                "skill_txt_color" : "#6E6D6D",
                "follow_txt" : "#003788",
                "logo_txt" : "#4F4F4F",
                "info_txt" : "#3D3D3D",
                "delete_btn_txt" : "#DC4A2D",
                "report_txt" : "#B0B0B0",
                "numbers_txt" : "#4F4F4F"
            },
            padding: {
                '9px': '9px',
                '28px': '21px',
                '20px' : "20px",
                '30px' : "30px",
                '12px' : "12px",
                "16px" : "16px",
                "400" : "350px"
            },
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
                wellfleet: ['Wellfleet', 'monospace'],
            },
            gap: {
                "1430": "1430px",
                "130" : "140px",
                "12" : "12px",
                '16' : '16px',
                "48" : "48px",
                "323" : "323px"
            },
            stroke: {
                'jobs_stroke': '#FCB4A5'
            },
            borderColor: {
                'jobs_stroke': '#FCB4A5'
            },


        },
    },
    plugins: [],
};
export default config;
