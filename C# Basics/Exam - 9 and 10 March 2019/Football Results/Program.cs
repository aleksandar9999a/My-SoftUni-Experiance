using System;

namespace Football_Results
{
    class Program
    {
        static void Main(string[] args)
        {
            int wonGamesCounter = 0;
            int lostGamesCounter = 0;
            int drawnGamesCounter = 0;

            for (int i = 0; i < 3; i++)
            {
                string game = Console.ReadLine();

                int firstTeamPoints = game[0];
                int secondTeamPoints = game[2];

                if (firstTeamPoints > secondTeamPoints)
                {
                    wonGamesCounter++;
                }
                else if (firstTeamPoints < secondTeamPoints)
                {
                    lostGamesCounter++;
                }
                else if (firstTeamPoints == secondTeamPoints)
                {
                    drawnGamesCounter++;
                }
            }

            Console.WriteLine($"Team won {wonGamesCounter} games.");
            Console.WriteLine($"Team lost {lostGamesCounter} games.");
            Console.WriteLine($"Drawn games: {drawnGamesCounter}");
        }
    }
}
