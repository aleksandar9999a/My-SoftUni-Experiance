using System;

namespace World_Snooker_Championship
{
    class Program
    {
        static void Main(string[] args)
        {
            string stageOfChampionship = Console.ReadLine();
            string ticketsType = Console.ReadLine();
            int ticketsCount = int.Parse(Console.ReadLine());
            string doYouWantPhoto = Console.ReadLine();

            double ticketsPrice = 0;

            if (stageOfChampionship == "Quarter final")
            {
                if (ticketsType == "Standard")
                {
                    ticketsPrice = 55.50 * ticketsCount;
                }
                else if (ticketsType == "Premium")
                {
                    ticketsPrice = 105.20 * ticketsCount;
                }
                else if (ticketsType == "VIP")
                {
                    ticketsPrice = 118.90 * ticketsCount;
                }
            }
            else if (stageOfChampionship == "Semi final")
            {
                if (ticketsType == "Standard")
                {
                    ticketsPrice = 75.88 * ticketsCount;
                }
                else if (ticketsType == "Premium")
                {
                    ticketsPrice = 125.22 * ticketsCount;
                }
                else if (ticketsType == "VIP")
                {
                    ticketsPrice = 300.40 * ticketsCount;
                }
            }
            else if (stageOfChampionship == "Final")
            {
                if (ticketsType == "Standard")
                {
                    ticketsPrice = 110.10 * ticketsCount;
                }
                else if (ticketsType == "Premium")
                {
                    ticketsPrice = 160.66 * ticketsCount;
                }
                else if (ticketsType == "VIP")
                {
                    ticketsPrice = 400 * ticketsCount;
                }
            }

            if (ticketsPrice > 2500 && ticketsPrice <= 4000)
            {
                ticketsPrice = ticketsPrice - (ticketsPrice * 0.1);
                if (doYouWantPhoto == "Y")
                {
                    ticketsPrice += 40 * ticketsCount;
                }
            }
            else if (ticketsPrice > 4000)
            {
                ticketsPrice = ticketsPrice - (ticketsPrice * 0.25);
            }

            if (ticketsPrice < 2500 && doYouWantPhoto == "Y")
            {
                ticketsPrice += 40 * ticketsCount;
            }

            Console.WriteLine($"{ticketsPrice:f2}");
        }
    }
}
