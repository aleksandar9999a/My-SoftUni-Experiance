using System;

namespace Oscars_week_in_cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            string filmName = Console.ReadLine();
            string hallType = Console.ReadLine();
            int tickets = int.Parse(Console.ReadLine());
            double profit = 0;

            if (filmName == "A Star Is Born")
            {
                if (hallType == "normal")
                {
                    profit = 7.50 * tickets;
                }
                else if (hallType == "luxury")
                {
                    profit = 10.50 * tickets;
                }
                else if (hallType == "ultra luxury")
                {
                    profit = 13.50 * tickets;
                }
            }
            else if (filmName == "Bohemian Rhapsody")
            {
                if (hallType == "normal")
                {
                    profit = 7.35 * tickets;
                }
                else if (hallType == "luxury")
                {
                    profit = 9.45 * tickets;
                }
                else if (hallType == "ultra luxury")
                {
                    profit = 12.75 * tickets;
                }
            }
            else if (filmName == "Green Book")
            {
                if (hallType == "normal")
                {
                    profit = 8.15 * tickets;
                }
                else if (hallType == "luxury")
                {
                    profit = 10.25 * tickets;
                }
                else if (hallType == "ultra luxury")
                {
                    profit = 13.25 * tickets;
                }
            }
            else if (filmName == "The Favourite")
            {
                if (hallType == "normal")
                {
                    profit = 8.75 * tickets;
                }
                else if (hallType == "luxury")
                {
                    profit = 11.55 * tickets;
                }
                else if (hallType == "ultra luxury")
                {
                    profit = 13.95 * tickets;
                }
            }
            Console.WriteLine($"{filmName} -> {profit:f2} lv.");
        }
    }
}
