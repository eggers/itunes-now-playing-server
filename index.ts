import {spawn} from 'child_process';


const get_artist = spawn( `osascript`, [
'-e', `tell application "iTunes"`,
'-e', `(get artist of current track)`,
//'-e', `(get name of current track) & "\n" & (get artist of current track)`,
'-e', `end tell`,
]);

const get_track = spawn( `osascript`, [
'-e', `tell application "iTunes"`,
'-e', `(get lyrics of current track)`,
//'-e', `(get name of current track) & "\n" & (get artist of current track)`,
'-e', `end tell`,
]);

get_track.stdout.on( 'data', data => {
  console.log( `stdout: ${data}` );
});

get_track.stderr.on( 'data', data => {
  console.log( `stderr: ${data}` );
});

get_track.on( 'close', code => {
  console.log( `child process exited with code ${code}` );
});


