using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Summer_Outfit
{
    class Program
    {
        static void Main(string[] args)
        {
            double degrees = double.Parse(Console.ReadLine());
            string day = Console.ReadLine().ToLower();

            string outfit = string.Empty;
            string shoes = string.Empty;

            if (degrees >=10 && degrees <= 18)
            {
                if (day == "morning")
                {
                    outfit = "Sweatshirt";
                    shoes = "Sneakers";
                }
                else if (day == "afternoon" || day == "evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
            }
            else if (degrees > 18 && degrees <= 24)
            {
                if (day == "morning" || day == "evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (day == "afternoon")
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
            }
            else if (degrees >= 25)
            {
                if (day == "morning")
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
                else if (day == "afternoon")
                {
                    outfit = "Swim Suit";
                    shoes = "Barefoot";
                }
                else if (day == "evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
            }

            Console.WriteLine("It's {0} degrees, get your {1} and {2}.", degrees, outfit, shoes);
        }
    }
}
