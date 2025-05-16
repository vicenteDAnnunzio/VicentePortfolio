# Personal Portfolio Website

A modern and responsive personal portfolio website built with Next.js, React, and Tailwind CSS. This portfolio serves as a platform to showcase my skills, projects, and contact information.

## Demo

Check out the live demo here: [https://your-portfolio-url.com](https://your-portfolio-url.com)

*(Replace the link above with your actual deployed portfolio URL)*

## Features

- Clean and modern design
- Fully responsive for all devices
- Smooth scrolling navigation between sections
- Dedicated sections for Hero, About Me, Projects, and Contact
- Interactive elements and subtle animations
- Contact form integration (placeholder)
- Dynamic display of skills
- Downloadable CV button
- Integration with GitHub and LinkedIn profiles
- "Coming Soon" placeholders for future projects

## Technologies Used

- **Framework:** Next.js
- **Library:** React
- **Styling:** Tailwind CSS
- **Language:** TypeScript, JavaScript
- **Icons:** Lucide React
- **UI Components:** Shadcn/ui (Button)
- **Other:** HTML, CSS, Git/GitHub

## Setup & Installation

Follow these steps to get the project running locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vicenteDAnnunzio/VicentePortfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
    *(Replace with your actual repository name)*

3.  **Install dependencies:**
    ```bash
    npm install
    # or using Yarn
    # yarn install
    # or using pnpm
    # pnpm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or using Yarn
    # yarn dev
    # or using pnpm
    # pnpm dev
    ```

5.  **Open your browser:**
    Visit `http://localhost:3000` (or the address shown in your terminal) to see the portfolio.

## Project Structure

```
your-repo-name/
├── public/
│   ├── fotocv.jpg
│   ├── D´Annunzio, Vicente - eCV.pdf
│   └── (other static assets like placeholder images)
├── src/
│   ├── app/
│   │   ├── page.tsx       # Main portfolio page component
│   │   ├── layout.tsx     # Root layout for Next.js app
│   │   └── globals.css    # Global styles (Tailwind CSS)
│   └── components/
│       └── ui/
│           └── button.tsx # Shadcn/ui button component
├── .gitignore         # Specifies intentionally untracked files
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## Customization

-   **Content:** Edit `src/app/page.tsx` to update sections like Hero, About Me, Projects, and Contact with your information.
-   **Projects:** Add new project objects to the `projects` array in `src/app/page.tsx`. Remember to include `title`, `description`, `tags`, `image`, `github`, and `demo` links, and set `comingSoon` to `false`.
-   **Skills:** Modify the `skills` array in the About Me section of `src/app/page.tsx`.
-   **Links:** Update social media links (GitHub, LinkedIn) and email in the header and footer/contact sections of `src/app/page.tsx`.
-   **CV:** Ensure your CV file (`D´Annunzio, Vicente - eCV.pdf`) is in the `public` folder and the download link in `src/app/page.tsx` points to it correctly.
-   **Styling:** Customize the appearance by modifying `src/app/globals.css` or directly in the Tailwind CSS classes within `src/app/page.tsx`.

## Contact

- **Email:** [vicente.dannunzio17@gmail.com](mailto:vicente.dannunzio17@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/vicente-dannunzio-470463307](https://www.linkedin.com/in/vicente-dannunzio-470463307)
- **GitHub:** [https://github.com/vicenteDAnnunzio](https://github.com/vicenteDAnnunzio)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. *(You might need to create a LICENSE.md file)*

## Acknowledgements

- Built using [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components based on [Shadcn/ui](https://ui.shadcn.com/)
