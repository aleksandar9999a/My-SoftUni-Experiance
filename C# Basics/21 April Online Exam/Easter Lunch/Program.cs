using System;

namespace Easter_Lunch
{
    class Program
    {
        static void Main(string[] args)
        {
            int easterBreadCount = int.Parse(Console.ReadLine());
            int eggsCount = int.Parse(Console.ReadLine());
            int cookiesCount = int.Parse(Console.ReadLine());

            double paint = (eggsCount * 12) * 0.15;

            double totalSum = easterBreadCount * 3.20 + eggsCount * 4.35 + cookiesCount * 5.40 + paint;
            Console.WriteLine($"{totalSum:f2}");
        }
    }
}
