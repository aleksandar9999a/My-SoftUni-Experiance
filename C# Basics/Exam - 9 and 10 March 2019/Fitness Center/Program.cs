using System;

namespace Fitness_Center
{
    class Program
    {
        static void Main(string[] args)
        {
            int fitnessClients = int.Parse(Console.ReadLine());

            int backCounter = 0;
            int chestCounter = 0;
            int legsCounter = 0;
            int absCounter = 0;
            int proteinShakeCounter = 0;
            int proteinBarCounter = 0;
            double workOutCounter = 0;
            double proteinCounter = 0;

            for (int i = 0; i < fitnessClients; i++)
            {
                string command = Console.ReadLine();

                if (command == "Back")
                {
                    backCounter++;
                    workOutCounter++;
                }
                else if (command == "Chest")
                {
                    chestCounter++;
                    workOutCounter++;
                }
                else if (command == "Legs")
                {
                    legsCounter++;
                    workOutCounter++;
                }
                else if (command == "Abs")
                {
                    absCounter++;
                    workOutCounter++;
                }
                else if (command == "Protein shake")
                {
                    proteinShakeCounter++;
                    proteinCounter++;
                }
                else if (command == "Protein bar")
                {
                    proteinBarCounter++;
                    proteinCounter++;
                }
            }

            Console.WriteLine($"{backCounter} - back");
            Console.WriteLine($"{chestCounter} - chest");
            Console.WriteLine($"{legsCounter} - legs");
            Console.WriteLine($"{absCounter} - abs");
            Console.WriteLine($"{proteinShakeCounter} - protein shake");
            Console.WriteLine($"{proteinBarCounter} - protein bar");
            Console.WriteLine($"{(workOutCounter / fitnessClients) * 100:f2}% - work out");
            Console.WriteLine($"{(proteinCounter / fitnessClients) * 100:f2}% - protein");
        }
    }
}
