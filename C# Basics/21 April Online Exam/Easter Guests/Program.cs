using System;

namespace Easter_Guests
{
    class Program
    {
        static void Main(string[] args)
        {
            double guestsCount = int.Parse(Console.ReadLine());
            double budget = int.Parse(Console.ReadLine());

            double еasterBreadForGuest = Math.Ceiling(guestsCount / 3);
            double easterBreadPrice = еasterBreadForGuest * 4;

            double eggsForGuests = guestsCount * 2;
            double eggsPrice = eggsForGuests * 0.45;

            double totalSum = eggsPrice + easterBreadPrice;

            if (totalSum <= budget)
            {
                double leftSum = budget - totalSum;
                Console.WriteLine($"Lyubo bought {еasterBreadForGuest} Easter bread and {eggsForGuests} eggs.");
                Console.WriteLine($"He has {leftSum:f2} lv. left.");
            }
            else
            {
                double neededSum = totalSum - budget;
                Console.WriteLine("Lyubo doesn't have enough money.");
                Console.WriteLine($"He needs {neededSum:f2} lv. more.");
            }
        }
    }
}
