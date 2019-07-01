using System;

namespace Tennis_Ranklist
{
    class Program
    {
        static void Main(string[] args)
        {
            double tournamentsCount = int.Parse(Console.ReadLine());
            int startingPoints = int.Parse(Console.ReadLine());
            string stage = string.Empty;
            double points = 0;
            double avaragePoints = 0;
            double finalScore = 0;
            double procent = 0;
            int successfulTournament = 0;

            for (int i = 0; i < tournamentsCount; i++)
            {
                stage = Console.ReadLine();

                if (stage == "W")
                {
                    points += 2000;
                    successfulTournament++;
                }
                else if (stage == "F")
                {
                    points += 1200;
                }
                else if (stage == "SF")
                {
                    points += 720;
                }
            }

            avaragePoints = Math.Floor(points / tournamentsCount);
            finalScore = startingPoints + points;
            procent = (successfulTournament / tournamentsCount) * 100;

            Console.WriteLine($"Final points: {finalScore}");
            Console.WriteLine($"Average points: {avaragePoints}");
            Console.WriteLine($"{procent:f2}%");
        }
    }
}
