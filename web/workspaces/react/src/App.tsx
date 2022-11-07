import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { useQuery, gql } from '@apollo/client'
// import { Post } from './shared/typings/graphql'
import './Table.scss'

const GET_POSTS = gql`
	query Posts {
		posts {
			id
			content
			title
		}
	}
`

interface ComponentProps {
	element: any
	index: number
}

const Component = ({ element, index }: ComponentProps) => {
	const rows = Object.entries(element).map(([key, value]) => {
		return (
			<div>
				<div className="element">
					<div className="value">{value ? value.toString() : ''}</div>
				</div>
			</div>
		)
	})

	return <div className="kk">{rows.map((el) => el)}</div>
}

function App() {
	// const [count, setCount] = useState(0)
	const { loading, error, data } = useQuery<{ posts: {}[] }>(GET_POSTS)

	console.log(data)
	return (
		<div className="App">
			<div className="table">
				<div className="kk">
					{data && Object.keys(data?.posts[0] as {}).map((e) => <div>{e}</div>)}
				</div>
				{data?.posts.map((element, i) => (
					<Component {...{ element }} index={i} />
				))}
			</div>
		</div>
	)
}

export default App
