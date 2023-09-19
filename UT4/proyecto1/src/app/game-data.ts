import { GameGenres } from "./game-genres";
import { GamePlatform } from "./game-platform";
import { GameRating } from "./game-rating";
import { GameScreenShots } from "./game-screenshots";

export interface Game {
  id: number; //3498
  slug: string; //"grand-theft-auto-v"
  name: string; //	"Grand Theft Auto V"
  released: Date; //	"2013-09-17"
  tba: boolean; //	false
  background_image: string; //	"https://media.rawg.io/me…45239fe22d035c0ebe64.jpg"
  rating: number; //	4.47
  rating_top: number; //	5
  ratings: GameRating[];
  ratings_count: number; //	6525
  reviews_text_count: number; //	57
  added: number; //20019
  //added_by_status	{… }
  metacritic: number; //	92
  playtime:number; //	74
  suggestions_count: number; //	421
  updated: Date; //	"2023-09-18T19:18:32"
  //user_game	null
  reviews_count: number; //	6622
  parent_platforms: GamePlatform[];
  genres: GameGenres[];
  short_screenshots: GameScreenShots[];

}