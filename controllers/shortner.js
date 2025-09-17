import { nanoid } from "nanoid";
import validator from "validator";
import URL from "../model/urlModel.js";
export async function shortner(req, res) {
	try {
        const { original_url } = req.body;
		const id = nanoid(5);
        
        if(!validator.isURL(original_url)){
            throw new Error
        }
		const newURL = new URL({
			original_url,
			id,
		});
		await newURL.save();
		const redUrl = "http://localhost:3000/" + id;
		res.send(redUrl);
	} catch (err) {
		console.log(err);
		res.redirect("/");
	}
}

export async function redirect(req, res) {
	try {
		const urlId = req.params.id;
		const red_url = await URL.findOne({ id: urlId });
		res.redirect(red_url.original_url);
	} catch (err) {
		res.redirect("/");
	}
}
