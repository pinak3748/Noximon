### Style Guide Seed Project

Welcome to the Style Guide Seed Project! This project aims to provide a set of guidelines and resources for creating a consistent and cohesive user interface across your projects. Below, you'll find information on the current progress, how to get started, contribute, and other essential sections.

#### Getting Started

To get started with the Style Guide Seed Project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ionio-io/Client-Seed.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` to see the Style Guide in action.

#### Current Progress

- [x] **signIn** (_/sign-in_) - Sign in page
- [x] **signUp** (_/sign-up_) - Sign up page
- [x] **forgotPassword** (_/forgot-password_) - Forgot password page
- [x] **resetPassword** (_/reset-password_) - Reset password page
- [x] **styleGuide** (_/style-guide_) - Style guide page
- [ ] **GPTPlayground** (_/gpt-playground_) - GPT Playground page
- [ ] **timeLine** (_/time-line_) - Timeline page

#### UI Library & Resources

- [shadcn](https://ui.shadcn.com/docs) - Main UI library
- [Phone Number Input](https://react-phone-number-input.github.io/react-phone-number-input/docs/getting-started/overview) - Phone number input with country code field
- [Multi Select Tags](https://shadcnui-expansions.typeart.cc/docs/multiple-selector) - Multi-select tags from a list
- [awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui?tab=readme-ov-files) - Collection of shadcn ui components and libraries
- [plate](https://platejs.org/docs) - Rich text editor
- [shadcn-stepper](https://shadcn-stepper.vercel.app/) - Stepper component based on shadcn ui
- [pricing-page-shadcn](https://pricing-page-shadcn.vercel.app/) - Pricing page based on shadcn ui
- [carousel](https://shadcn-extension.vercel.app/docs/carousel) - Carousel component based on shadcn ui

#### Custom Components

- [x] Loading button with spinner
- [x] Header for page title and action buttons
- [x] Subheader for section title and description
- [x] Analytical Card for displaying data on dashboard
- [x] Combo Box for selecting multiple options from a dropdown
- [x] Confirmation model for different actions like success, delete
- [ ] Date Picker for selecting date range
- [ ] File Upload for uploading files
- [ ] Pagination for navigating between pages

#### Contributing

We welcome contributions to the Style Guide Seed Project! If you'd like to contribute, please follow these steps:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Run the formatting and linting scripts:
   ```bash
   npm run format
   npm run lint
   ```
5. Push your changes to your fork and submit a pull request.

#### To Do

- [ ] Add more custom components
- [ ] Add more pages
- [ ] Add a drawer to explain how to use the components
- [ ] Add tooltips for explaining the components
- [ ] Add Advance table with sorting, filtering, and pagination ([AG-Grid](https://www.ag-grid.com/example/))
- [ ] Add chart for data visualization ([AG-Charts](https://charts.ag-grid.com/))
- [ ] Add calendar for event scheduling
- [ ] Add map for location visualization
- [ ] Add Notification for alerts and messages
