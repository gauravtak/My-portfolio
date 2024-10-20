import fs from "fs" 
import path from "path"
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export default function getPostData(){
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map(filename => {
		const id = filename.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(fullPath, 'utf-8');
		const matterResult = matter(fileContents);

		return { id, ...matterResult }
	});

	return allPostsData.sort(({date:a}, {date: b}) => {
		if (a<b){ return 1 }
		else if (a>b){return -1}
		else { return 0}
	});
}

