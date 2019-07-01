using System;

namespace Darts
{
    class Program
    {
        static void Main(string[] args)
        {
            string playerName = Console.ReadLine();

            string field = string.Empty;
            int score = 0;
            int startingPoints = 301;

            int successfulShot = 0;
            int unsuccessfulShot = 0;

            while ((field = Console.ReadLine()) != "Retire")
            {
                score = int.Parse(Console.ReadLine());

                if (field == "Single" && score <= startingPoints)
                {
                    startingPoints -= score;
                    successfulShot++;
                }
                else if (field == "Single" && score > startingPoints)
                {
                    unsuccessfulShot++;
                }

                if (field == "Double" && score * 2 <= startingPoints)
                {
                    startingPoints -= score * 2;
                    successfulShot++;
                }
                else if (field == "Double" && score * 2 > startingPoints)
                {
                    unsuccessfulShot++;
                }

                if (field == "Triple" && score * 3 <= startingPoints)
                {
                    startingPoints -= score * 3;
                    successfulShot++;
                }
                else if (field == "Triple" && score * 3 > startingPoints)
                {
                    unsuccessfulShot++;
                }

                if (startingPoints == 0)
                {
                    break;
                }
            }

            if (startingPoints == 0)
            {
                Console.WriteLine($"{playerName} won the leg with {successfulShot} shots.");
            }
            if (field == "Retire")
            {
                Console.WriteLine($"{playerName} retired after {unsuccessfulShot} unsuccessful shots.");
            }
        }
    }
}
