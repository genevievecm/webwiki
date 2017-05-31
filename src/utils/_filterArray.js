// filter array items that contain regex
export const filter = (array, regex) =>
	array.filter(item => {
		item.taxonomy ?
			item = item.title : // category
			item = item.post_title; // post
		return item.toLowerCase().includes(regex.toLowerCase())
	});