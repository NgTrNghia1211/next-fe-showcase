This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Other Libraries or Technologies

- headlessui.com

## Review React

### React Hook:

- Help function components to do what class components can do
- When using hook, pleas consider
  - Name
  - Parameters
  - Return
  - Usage
- Life Cycle:
  - `Add To DOM` -> `Remove From DOM`

### List of Hook:

- **useState():** Reduce complexity _in changing UI based on changing data_

  - State of Data

```javascript
const [state, setState] = useState(initialState);
/*
	Lifecycle rules:
	1. Component will be rerendered after setState()
	2. setState with callback
		setState(prevState => {}): instead of doing all tasks then rerender -> setState for state, 
		This allows after setState done, the prevState is updated
*/
```
