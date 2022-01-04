import { Song as TSong } from "../api/song/Song";

export const SONG_TITLE_FIELD = "name";

export const SongTitle = (record: TSong): string => {
  return record.name || record.id;
};
