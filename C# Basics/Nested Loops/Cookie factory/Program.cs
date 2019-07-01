using System;

namespace Cookie_factory
{
    class Program
    {
        static void Main(string[] args)
        {
            int batchNumber = int.Parse(Console.ReadLine());

            int eggsCounter = 0;
            int flourCounter = 0;
            int sugarCounter = 0;

            for (int i = 1; i <= batchNumber; i++)
            {
                eggsCounter = 0;
                flourCounter = 0;
                sugarCounter = 0;

                while (true)
                {
                    string product = string.Empty;
                    while (product != "Bake!")
                    {
                        product = Console.ReadLine();

                        if (product == "eggs")
                        {
                            eggsCounter++;
                        }
                        else if (product == "flour")
                        {
                            flourCounter++;
                        }
                        else if (product == "sugar")
                        {
                            sugarCounter++;
                        }
                    }
                    if (eggsCounter > 0 && flourCounter > 0 && sugarCounter > 0)
                    {
                        Console.WriteLine($"Baking batch number {i}...");
                        break;
                    }
                    else
                    {
                        Console.WriteLine($"The batter should contain flour, eggs and sugar!");
                    }
                }
            }
        }
    }
}
