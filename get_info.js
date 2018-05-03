"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
function get_track_info(callback) {
    var get_artist = child_process_1.spawn("osascript", [
        '-e', "tell application \"iTunes\"",
        '-e', "set output to name of current track",
        '-e', "set output to output & \"::::\" & year of current track",
        '-e', "set output to output & \"::::\" & artist of current track",
        '-e', "set output to output & \"::::\" & album artist of current track",
        '-e', "output",
        '-e', "end tell",
    ]);
    var get_track = child_process_1.spawn("osascript", [
        '-e', "tell application \"iTunes\"",
        '-e', "(get lyrics of current track)",
        //'-e', `(get name of current track) & "\n" & (get artist of current track)`,
        '-e', "end tell",
    ]);
    get_artist.stdout.on('data', function (data) {
        data = data.toString('utf8');
        var result = data.split('::::');
        console.log(result);
        callback({
            title: getTitle(result[0], result[1]),
            artist: shortName(result[2]),
            singer: shortName(result[3])
        });
    });
    get_artist.stderr.on('data', function (data) {
        console.log("stderr: " + data);
        callback(data);
    });
}
exports.get_track_info = get_track_info;
function getTitle(title, year) {
    title = title.trim().replace(/\.*$/, '');
    if (year && year !== '0') {
        title += " (" + year + ")";
    }
    return title;
}
function shortName(fullName) {
    return fullName.trim().replace(/,.*/, '');
}
