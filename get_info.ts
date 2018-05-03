import {spawn} from 'child_process';

export function get_track_info(callback: Function) {
  const get_artist = spawn(`osascript`, [
    '-e', `tell application "iTunes"`,
    '-e', `set output to name of current track`,
    '-e', `set output to output & "::::" & year of current track`,
    '-e', `set output to output & "::::" & artist of current track`,
    '-e', `set output to output & "::::" & album artist of current track`,
    '-e', `output`,
    '-e', `end tell`,
  ]);

  const get_track = spawn(`osascript`, [
    '-e', `tell application "iTunes"`,
    '-e', `(get lyrics of current track)`,
  //'-e', `(get name of current track) & "\n" & (get artist of current track)`,
    '-e', `end tell`,
  ]);

  get_artist.stdout.on('data', data => {
    data = data.toString('utf8');
    const result = data.split('::::');
    console.log(result);
    callback({
      title: getTitle(result[0], result[1]),
      artist: shortName(result[2]),
      singer: shortName(result[3]),
    });
  });

  get_artist.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
    callback(data);
  });
}

function getTitle(title, year) {
  title = title.trim().replace(/\.*$/,'');
  if (year && year !== '0') {
    title += ` (${year})`;
  }

  return title;
}

function shortName(fullName) {
  return fullName.trim().replace(/,.*/,'');
}
