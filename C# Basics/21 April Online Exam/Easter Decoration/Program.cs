using System;

namespace Easter_Decoration
{
    class Program
    {
        static void Main(string[] args)
        {
            int clientCount = int.Parse(Console.ReadLine());

            int itemsCounter = 0;
            double priceForUser = 0;
            double totalSum = 0;
            double averageTotalSum = 0;
            string commands = string.Empty;

            for (int i = 0; i < clientCount; i++)
            {
                while ((commands = Console.ReadLine()) != "Finish")
                {
                    itemsCounter++;
                    if (commands == "basket")
                    {
                        priceForUser += 1.50;
                    }
                    else if (commands == "wreath")
                    {
                        priceForUser += 3.80;
                    }
                    else if (commands == "chocolate bunny")
                    {
                        priceForUser += 7;
                    }
                }

                if (itemsCounter % 2 == 0)
                {
                    priceForUser = priceForUser - priceForUser * 0.2;
                }

                Console.WriteLine($"You purchased {itemsCounter} items for {priceForUser:f2} leva.");
                totalSum += priceForUser;
                priceForUser = 0;
                itemsCounter = 0;
            }

            averageTotalSum = totalSum / clientCount;
            Console.WriteLine($"Average bill per client is: {averageTotalSum:f2} leva.");
        }
    }
}
