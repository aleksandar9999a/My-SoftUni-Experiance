using System;

namespace Skeleton
{
    class Program
    {
        static void Main(string[] args)
        {
            int controlMinutes = int.Parse(Console.ReadLine());
            int controlSeconds = int.Parse(Console.ReadLine());
            double length = double.Parse(Console.ReadLine());
            int secondsForMetrics = int.Parse(Console.ReadLine());

            controlMinutes = controlMinutes * 60 + controlSeconds;
            double timeDecrease = (length / 120) * 2.5;
            double marinTime = (length / 100) * secondsForMetrics - timeDecrease;

            if (marinTime <= controlMinutes)
            {
                Console.WriteLine("Marin Bangiev won an Olympic quota!");
                Console.WriteLine($"His time is {marinTime:f3}.");
            }
            else
            {
                Console.WriteLine($"No, Marin failed! He was {marinTime - controlMinutes:f3} second slower.");
            }

        }
    }
}
