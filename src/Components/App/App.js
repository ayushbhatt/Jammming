// import logo from './logo.svg';
import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[
        {name:'name1',id:'1',artist:'artist1',album:'album1'},
        {name:'name2',id:'2',artist:'artist2',album:'album2'},
        {name:'name3',id:'3',artist:'artist3',album:'album3'}
      ], 
      playlistName : 'My Playlist',
      playlistTracks : [{name:'pname1',artist:'artist1',album:'album1',id:'id6'},
                          {name:'pname2',artist:'artist2',album:'album2',id:'id4'},
                          {name:'pname3',artist:'artist3',album:'album3',id:'id5'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search =  this.search.bind(this);
  }
  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }
  search(value){
    console.log(value);
  }
  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
  removeTrack(track){
    let tracks = this.state.playlistTracks.filter(item => item !== track);
    this.setState({playlistTracks: tracks});
  }
  updatePlaylistName(playListName){
    this.setState({playlistName: playListName});
  }
  render()
  {
    return(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        < SearchBar />
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack}
                         searchResults={this.state.searchResults}
                         OnSearch={this.search} />
          <Playlist playListName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks} 
                    onRemove={this.removeTrack} 
                    onNameChange={this.updatePlaylistName}
                    onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
