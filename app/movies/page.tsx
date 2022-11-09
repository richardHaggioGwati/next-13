import { use } from 'react';
import Image from 'next/image';

const getMovies = async (): Promise<any> => {
	try {
		const response = await fetch(
			'https://fake-movie-database-api.herokuapp.com/api?s=batman',
		);
		return await response.json();
	} catch (error) {
		console.log(error)
	}
};

interface MovieType {
	Search: {
		imdbID: string;
		Title: string;
		Year: string;
		Poster: string;
	}[]
}

export default function Page() {
	const movies: MovieType = use(getMovies());

	return (
		<div>
			{movies?.Search.map((movie) => (
				<div key={movie.imdbID}>
					<p>{movie.Title}</p>
					<p>{movie.Year}</p>
					<Image src={movie.Poster} alt='Poster' width={200} height={200} />
				</div>
			))}
		</div>
	);
}
