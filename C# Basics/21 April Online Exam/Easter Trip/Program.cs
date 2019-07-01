using System;

namespace Easter_Trip
{
    class Program
    {
        static void Main(string[] args)
        {
            string destination = Console.ReadLine();
            string destinationDays = Console.ReadLine();
            int nightsDay = int.Parse(Console.ReadLine());

            double price = 0;

            if (destination == "France")
            {
                if (destinationDays == "21-23")
                {
                    price = nightsDay * 30;
                }
                else if (destinationDays == "24-27")
                {
                    price = nightsDay * 35;
                }
                else if (destinationDays == "28-31")
                {
                    price = nightsDay * 40;
                }
            }
            else if (destination == "Italy")
            {
                if (destinationDays == "21-23")
                {
                    price = nightsDay * 28;
                }
                else if (destinationDays == "24-27")
                {
                    price = nightsDay * 32;
                }
                else if (destinationDays == "28-31")
                {
                    price = nightsDay * 39;
                }
            }
            else if (destination == "Germany")
            {
                if (destinationDays == "21-23")
                {
                    price = nightsDay * 32;
                }
                else if (destinationDays == "24-27")
                {
                    price = nightsDay * 37;
                }
                else if (destinationDays == "28-31")
                {
                    price = nightsDay * 43;
                }
            }

            Console.WriteLine($"Easter trip to {destination} : {price:f2} leva.");
        }
    }
}
