"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var get_artist = child_process_1.spawn("osascript", [
    '-e', "tell application \"iTunes\"",
    '-e', "(get artist of current track)",
    //'-e', `(get name of current track) & "\n" & (get artist of current track)`,
    '-e', "end tell",
]);
var get_track = child_process_1.spawn("osascript", [
    '-e', "tell application \"iTunes\"",
    '-e', "(get lyrics of current track)",
    //'-e', `(get name of current track) & "\n" & (get artist of current track)`,
    '-e', "end tell",
]);
get_track.stdout.on('data', function (data) {
    console.log("stdout: " + data);
});
get_track.stderr.on('data', function (data) {
    console.log("stderr: " + data);
});
get_track.on('close', function (code) {
    console.log("child process exited with code " + code);
});
