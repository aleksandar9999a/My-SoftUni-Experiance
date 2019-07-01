using System;

namespace Easter_Eggs_Battle
{
    class Program
    {
        static void Main(string[] args)
        {
            int playerOneEggs = int.Parse(Console.ReadLine());
            int playerTwoEggs = int.Parse(Console.ReadLine());

            string commands = string.Empty;

            bool noEggsPlayerOne = false;
            bool noEggsPlayerTwo = false;

            while ((commands = Console.ReadLine()) != "End of battle")
            {
                if (commands == "one")
                {
                    playerTwoEggs--;
                }
                else if (commands == "two")
                {
                    playerOneEggs--;
                }
                else
                {
                    Console.WriteLine("What???");
                }


                if (playerOneEggs == 0)
                {
                    noEggsPlayerOne = true;
                    break;
                }
                else if (playerTwoEggs == 0)
                {
                    noEggsPlayerTwo = true;
                    break;
                }
            }

            if (commands == "End of battle")
            {
                Console.WriteLine($"Player one has {playerOneEggs} eggs left.");
                Console.WriteLine($"Player two has {playerTwoEggs} eggs left.");
            }

            else if (noEggsPlayerOne)
            {
                Console.WriteLine($"Player one is out of eggs. Player two has {playerTwoEggs} eggs left.");
            }
            else if (noEggsPlayerTwo)
            {
                Console.WriteLine($"Player two is out of eggs. Player one has {playerOneEggs} eggs left.");
            }
        }
    }
}
