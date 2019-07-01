using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel_Room
{
    class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine().ToLower();
            double days = double.Parse(Console.ReadLine());

            double priceStudio = 0;
            double priceApartmant = 0;

            if (month == "may" || month == "october")
            {
                priceApartmant = 65 * days;
                priceStudio = 50 * days;

                if (days > 7 && days < 14)
                {
                    priceStudio = priceStudio - priceStudio * 0.05;
                }
                else if (days >= 14)
                {
                    priceStudio = priceStudio - priceStudio * 0.3;
                    priceApartmant = priceApartmant - priceApartmant * 0.1;
                }
            }

            else if (month == "june" || month == "september")
            {
                priceApartmant = 68.70 * days;
                priceStudio = 75.20 * days;

                if (days > 14)
                {
                    priceStudio = priceStudio - priceStudio * 0.2;
                    priceApartmant = priceApartmant - priceApartmant * 0.1;
                }
            }

            else if (month == "july" || month == "august")
            {
                priceApartmant = 77 * days;
                priceStudio = 76 * days;

                if (days > 14)
                {
                    priceApartmant = priceApartmant - priceApartmant * 0.1;
                }
            }

            Console.WriteLine($"Apartment: {priceApartmant:f2} lv.");
            Console.WriteLine($"Studio: {priceStudio:f2} lv.");
        }
    }
}
