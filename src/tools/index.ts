import { dadJoke,dadJokeToolDefinition } from "./dad.Joke";
import { generateImage,generateImageToolDefinition } from "./generateImage";
import { reddit,redditToolDefinition} from "./reddit";


export const tools=[
    generateImageToolDefinition,
    redditToolDefinition,
    dadJokeToolDefinition,
]

