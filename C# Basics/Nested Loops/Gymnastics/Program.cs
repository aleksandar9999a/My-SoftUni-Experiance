using System;

namespace Gymnastics
{
    class Program
    {
        static void Main(string[] args)
        {
            string country = Console.ReadLine();
            string instruments = Console.ReadLine();

            double hardScore = 0;
            double actingScore = 0;

            if (country == "Russia")
            {
                if (instruments == "ribbon")
                {
                    hardScore = 9.1;
                    actingScore = 9.4;
                }
                else if (instruments == "hoop")
                {
                    hardScore = 9.3;
                    actingScore = 9.8;
                }
                else if (instruments == "rope")
                {
                    hardScore = 9.6;
                    actingScore = 9.0;
                }
            }
            else if (country == "Bulgaria")
            {
                if (instruments == "ribbon")
                {
                    hardScore = 9.6;
                    actingScore = 9.4;
                }
                else if (instruments == "hoop")
                {
                    hardScore = 9.55;
                    actingScore = 9.75;
                }
                else if (instruments == "rope")
                {
                    hardScore = 9.5;
                    actingScore = 9.4;
                }
            }
            else if (country == "Italy")
            {
                if (instruments == "ribbon")
                {
                    hardScore = 9.2;
                    actingScore = 9.5;
                }
                else if (instruments == "hoop")
                {
                    hardScore = 9.45;
                    actingScore = 9.35;
                }
                else if (instruments == "rope")
                {
                    hardScore = 9.7;
                    actingScore = 9.15;
                }
            }

            Console.WriteLine($"The team of {country} get {hardScore + actingScore:f3} on {instruments}.");
            Console.WriteLine($"{((20 - (hardScore + actingScore))/20) * 100:f2}%");
        }
    }
}
