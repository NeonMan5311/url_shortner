import React from "react";
import axios from "axios";
import "./App.css";
import validator from 'validator';

const API_URL = "https://url-shortner-42b3.onrender.com";
function App() {
	const [formData, setformData] = React.useState("");
	const [urlCheck, seturlCheck] = React.useState(false);
	const [shortUrl, setShortUrl] = React.useState("");
	const handleChange = (e) => {
		const { value } = e.target;
		setformData(value);
		seturlCheck(validator.isURL(value));
		console.log(value);
		console.log(urlCheck);
	};
	async function handleSubmit(e) {
		e.preventDefault();
		if (!urlCheck) alert("Enter a valid URL");
		try {
			const response = await axios.post(API_URL, {
				original_url: formData
			});
			setShortUrl(response.data);
		} catch (error) {
			console.error("Error loading the url ", error);
		}
		console.log("hi");
	}
	console.log(shortUrl);
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="text-white font-geist min-w-80 h-100 bg-tranparent p-4 rounded-md border-2 border-white/50">
				<form className="flex justify-center items-center flex-col">
					<label className="text-[20px] mb-2" htmlFor="original_url">
						Enter original URL
					</label>
					<textarea
						value={formData}
						onChange={handleChange}
						spellCheck="false"
						className={`field-sizing-content resize-none w-75 h-40 border-2 font-mono no-scrollbar focus:outline-0 px-2 py-1 bg-transparent
						overflow-auto
						${urlCheck ? "border-green-500" : "border-red-500"}
						${formData == "" && "border-white"}
						`}
						id="original_url"
						name="original_url"
					/>
					<button
						className="text-[18px] bg-transparent mt-6 border-2 border-white px-4"
						onClick={(e) => handleSubmit(e)}
					>
						Submit
					</button>
				</form>
				{shortUrl != "" && <div className="mt-6">{shortUrl}</div>}
			</div>
		</div>
	);
}

export default App;
