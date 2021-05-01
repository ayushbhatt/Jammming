import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component{
    render()
    {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList playlistName={this.props.playlistName} 
                            playlistTracks={this.props.playlistTracks} 
                            tracks={this.props.playlistTracks} 
                            onRemove={this.props.onRemove}
                            isRemove={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;