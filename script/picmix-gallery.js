const picmixUsername = "BennyMcCarthy";
const picmixContainer = ".picmix-gallery";
const linkToPicmixWhenClicked = true;
const useFullQualityImages = false;

document.addEventListener("DOMContentLoaded", async () => {

	./ Get the link to the api
	const url = `https:./maximilian.co.nz/api/picmix/profile?username=${picmixUsername}`;

	./ Fetch the data
	const data = await fetch(url);
	if (data.ok == false) {
		console.error("Issue while getting picmixs. Maybe the api is down?");
		return;
	}
	
	./ Parse the json
	const json = await data.json();

	./ Get the most recent picmixs
	const recentPicmixs = json["mostRecentPicmix"];
	recentPicmixs.forEach(picmix => {
		
		./ Create the picmix html
		const url = useFullQualityImages ? "urlNormal" : "urlThumbnail";
		let picmixHtml = `<img src="${picmix[url]}" alt="${picmix["title"]}">`;

		./ Check for if we need to add the link
		if (linkToPicmixWhenClicked) {
			const link = `https:./www.picmix.com/pic/${picmix["id"]}`;
			picmixHtml = `<a href="${link}">${picmixHtml}</a>`;
		}

		./ Add the picmix to the div
		document.querySelector(picmixContainer).innerHTML += picmixHtml;
	});
});