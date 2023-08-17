import { getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
	params: {
		postId: string
	}
}

export const generateMetadata = ({ params }: Props) => {
	const posts = getSortedPostsData()
	const { postId } = params

	const post = posts.find((post) => post.id == postId)

	if (!post) {
		return {
			title: 'Post Not Found'
		}
	}

	return {
		title: post.title
	}
}

const SinglePostsPage = async ({ params }: Props) => {
	const posts = getSortedPostsData()
	const { postId } = params

	if (!posts.find((post) => post.id == postId)) {
		return notFound()
	}

	return <div>SinglePostsPage</div>
}

export default SinglePostsPage
