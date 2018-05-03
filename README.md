A simple webserver that shows the currently playing song in iTunes.

Simply run `npm install`, then `npm start` to start the server.

I have a specific way that I label my songs. I put the orchestra in the artist field, and the singer in the album artist field. I also ignore the spacer songs by checking for the trimmed name starting with "2 sec".

I also have some applescripts that I use frequently in the applescripts folder. If you copy them to `~/Library/iTunes/Scripts/`, they'll show up in the menu bar for iTunes under Scripts. You can then add shortcuts via `System Preferences > Keyboard > Shortcuts`. Detailed instructions are available at: https://dougscripts.com/itunes/itinfo/asitbasics.php The applescripts I have are:

* Build Tanda: Searches playlists for the selected songs and pulls +/- 4 songs into a new playlist for each occurrence, ignoring duplicates, and stopping when changing groupings. Milonga/Tango/Vals/Cortina/etc.. songs each have a different grouping.
* Find Tandas: Basically the same as above, but will add duplicates so that you can see the context of where they were used.
* Fade and Next: Fades the current song pauses, and then plays the next song. Better and more consistent than manually fading cortinas.
* Fade and Annnounce Next: Same as above, but uses the mac text to speech to announce the orchestra & singer.
* Update Played And Count: Goes through all of my milonga playlists, and updates the play count to how many times I've used the song, and the last played to the most recent playlist. It depends on folders being named "YYYY" and playlists starting with "MM/DD"

