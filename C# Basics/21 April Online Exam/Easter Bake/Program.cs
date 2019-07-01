using System;

namespace Easter_Bake
{
    class Program
    {
        static void Main(string[] args)
        {
            int easterBreadsCounter = int.Parse(Console.ReadLine());

            int maxUsedSugar = int.MinValue;
            int maxUsedFlour = int.MinValue;

            double sugarPackages = 0;
            double flourPackages = 0;

            for (int i = 0; i < easterBreadsCounter; i++)
            {
                int sugar = int.Parse(Console.ReadLine());
                int flour = int.Parse(Console.ReadLine());

                if (sugar > maxUsedSugar)
                {
                    maxUsedSugar = sugar;
                }
                if (flour > maxUsedFlour)
                {
                    maxUsedFlour = flour;
                }

                sugarPackages += sugar;
                flourPackages += flour;
            }

            sugarPackages = Math.Ceiling(sugarPackages / 950);
            flourPackages = Math.Ceiling(flourPackages / 750);

            Console.WriteLine($"Sugar: {sugarPackages}");
            Console.WriteLine($"Flour: {flourPackages}");
            Console.WriteLine($"Max used flour is {maxUsedFlour} grams, max used sugar is {maxUsedSugar} grams.");
        }
    }
}
