import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}
	render() {
		return (
			<div className="entire-library">
		      <img src="/assets/images/library_background.jpg" alt="smoke background" className="library-img"></img>
			  
			  <section className='album-list'>
			{
				this.state.albums.map( (album, index) =>
					<Link to={`/album/${album.slug}`} key={index}> 
					  <img src={album.albumCover} alt={album.title} />
					  <div>{album.title}</div>
					  <div>{album.artist}</div>
					  <div>{album.songs.length} songs</div>
					</Link>
				)
			}
			  </section>
			</div>
			);
	}
}

export default Library;