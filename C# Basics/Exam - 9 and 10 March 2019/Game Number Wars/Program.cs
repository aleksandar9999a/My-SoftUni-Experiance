using System;

namespace Game_Number_Wars
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstPlayerName = Console.ReadLine();
            string secondPlayerName = Console.ReadLine();

            int firstPlayerPoints = 0;
            int secondPlayerPoints = 0;

            string firstPlayerCard = String.Empty;
            string secondPlayerCard = String.Empty;

            while ((firstPlayerCard = Console.ReadLine()) != "End of game" && (secondPlayerCard = Console.ReadLine()) != "End of game")
            {
                int firstPlayerCardPoints = int.Parse(firstPlayerCard);
                int secondPlayerCardPoints = int.Parse(secondPlayerCard);

                if (firstPlayerCardPoints > secondPlayerCardPoints)
                {
                    firstPlayerPoints += (firstPlayerCardPoints - secondPlayerCardPoints);
                }
                else if (firstPlayerCardPoints < secondPlayerCardPoints)
                {
                    secondPlayerPoints += (secondPlayerCardPoints - firstPlayerCardPoints);
                }
                else if (firstPlayerCardPoints == secondPlayerCardPoints)
                {
                    Console.WriteLine("Number wars!");
                    firstPlayerCardPoints = int.Parse(Console.ReadLine());
                    secondPlayerCardPoints = int.Parse(Console.ReadLine());

                    if (firstPlayerCardPoints > secondPlayerCardPoints)
                    {
                        Console.WriteLine($"{firstPlayerName} is winner with {firstPlayerPoints} points");
                    }
                    else if (firstPlayerCardPoints < secondPlayerCardPoints)
                    {
                        Console.WriteLine($"{secondPlayerName} is winner with {secondPlayerPoints} points");
                    }
                    break;
                }
            }

            if (firstPlayerCard == "End of game" || secondPlayerCard == "End of game")
            {
                Console.WriteLine($"{firstPlayerName} has {firstPlayerPoints} points");
                Console.WriteLine($"{secondPlayerName} has {secondPlayerPoints} points");
            }
        }
    }
}
