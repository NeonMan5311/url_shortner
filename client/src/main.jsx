import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className=" h-screen w-screen bg-black relative">
			{/* Vercel Grid */}
			<div
				className=" absolute inset-0 opacity-30 pointer-events-none"
				style={{
					backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px)
        `,
					backgroundSize: "60px 60px",
				}}
			/>
				<App />
		</div>
	</StrictMode>
);
