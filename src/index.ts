import * as readLine from "node:readline/promises";
import { stdin as input, stdout as output } from "process";
import { pow, round } from "mathjs";

const WEIGHT = 40;
const TEN_TIMES_DIFFERENCE = 400;

const rl = readLine.createInterface({ input, output });

const findProbability = (ratingLoser: number, ratingWinner: number): number => {
  const powerCalc: number = Number(
    pow(10, (1.0 * (ratingLoser - ratingWinner)) / TEN_TIMES_DIFFERENCE)
  );
  return 1 / (1 + powerCalc);
};
const findNewEloRating = (
  oldRating1: number,
  oldRating2: number,
  K: number,
  player1Winner: boolean
): [number, number] => {
  let newPlayer1Rating: number;
  let newPlayer2Rating: number;

  const player1WinProbability: number = findProbability(oldRating2, oldRating1);
  const player2WinProbability: number = findProbability(oldRating1, oldRating2);

  if (player1Winner === true) {
    newPlayer1Rating = oldRating1 + K * (1 - player1WinProbability);
    newPlayer2Rating = oldRating2 + K * (0 - player2WinProbability);
  } else {
    136;

    newPlayer1Rating = oldRating1 + K * (0 - player1WinProbability);
    newPlayer2Rating = oldRating2 + K * (1 - player2WinProbability);
  }

  return [round(newPlayer1Rating), round(newPlayer2Rating)];
};

const main = async () => {
  const response1: string = await rl.question("Player 1 rating: ");
  const response2: string = await rl.question("Player 2 rating: ");
  const responseWinner: string = await rl.question("Who won? :");

  const player1Won: boolean = responseWinner.includes("1");
  const rating1: number = Number(response1);
  const rating2: number = Number(response2);

  const newElos = findNewEloRating(rating1, rating2, WEIGHT, player1Won);

  console.log("New Elos\n");
  console.log("--------");
  console.log(`Player1: ${newElos[0]}\n`);
  console.log(`Player2: ${newElos[1]}\n`);
  console.log("--------\n");
  main();
};

main();
