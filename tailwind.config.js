/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:[
    "text-green-600",
    "text-red-600",
    "text-blue-600",
    "text-orange-600",
    "bg-green-600",
    "bg-red-600",
    "bg-blue-600",
    "bg-orange-600",
    "group-hover:text-green-600",
    "group-hover:text-red-600",
    "group-hover:text-blue-600",
    "group-hover:text-orange-600",
    "group-hover:bg-green-600",
    "group-hover:bg-red-600",
    "group-hover:bg-blue-600",
    "group-hover:bg-orange-600",
    "hover:bg-green-600",
    "hover:bg-red-600",
    "hover:bg-blue-600",
    "hover:bg-orange-600",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
	screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
  	fontFamily: {
  		poppins: [
  			'Poppins',
  			'sans-serif'
  		],
  		spaceGrotesk: [
  			'Space Grotesk',
  			'sans-serif'
  		]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

