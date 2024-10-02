import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

const {width} = Dimensions.get('window');

import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { playlistData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';



export default function MusicPlayer() {
	const [Track, setTrack] = useState<Track | null>()

	useTrackPlayerEvents([Event.PlaybackTrackChanged],async(event)=>{
		switch(event.type){
			case Event.PlaybackTrackChanged:

				const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
				setTrack(playingTrack)
				break;
			
		}
	})

	const renderArtWork = ()=>{
		return (
			<View style={[styles.listArtWrapper]}>
				<View style={[styles.albumContainer]}>
					{
						Track?.artwork && (
							<Image
								style={styles.albumArtImg}
								source={{
									uri:Track.artwork?.toString()
								}}
							/>
						)
					}
				</View>
			</View>
		)
	}
  return (
    <View style={styles.container}>
		<FlatList 
			horizontal
			data={playlistData}
			renderItem={renderArtWork}
			keyExtractor={song => song.id.toString()}
		/>
		<SongInfo 
			track={Track}
		/>
		<SongSlider/>
		<ControlCenter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});
