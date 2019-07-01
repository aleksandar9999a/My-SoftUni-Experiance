using System;

namespace Train_The_Trainers
{
    class Program
    {
        static void Main(string[] args)
        {
            int juryNumbers = int.Parse(Console.ReadLine());
            double[] sumPoints = new double[10];
            double avaragePoints = 0;
            string[] commands = new string[10];
            for (int i = 0; i < 10; i++)
            {
                commands[i] = Console.ReadLine();
                if (commands[i] == "Finish")
                {
                    for (int j = 0; j < i; j++)
                    {
                        Console.WriteLine($"{commands[j]} - {sumPoints[j]:f2}.");
                        avaragePoints += sumPoints[j];
                    }
                    Console.WriteLine($"Student's final assessment is {avaragePoints / i:f2}.");
                    break;
                }

                for (int juryCounter = 0; juryCounter < juryNumbers; juryCounter++)
                {
                    double points = double.Parse(Console.ReadLine());
                    sumPoints[i] += points;
                }

                sumPoints[i] = sumPoints[i] / juryNumbers;
            }
        }
    }
}
